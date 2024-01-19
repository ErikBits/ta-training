import React, { useState, useEffect } from "react";
import AddProductForm from "./AdminViews/ManageProducts";
import { getProducts, getUser } from "../helpers/backendHelpers.js";
import useDocumenTitle from "../hooks/useDocumentTitle.js";
import { getProductImage } from "../helpers/imageHelpers.js";


const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9);

    useDocumenTitle('Products');

    var is_admin = 0, user_id;

    if ((user_id = localStorage.getItem('user_id')) !== null) {
        const fetchAdminStatus = async (user_id) => {
            const userDetails = await getUser(user_id);
            return userDetails[0].is_admin;
        }

        is_admin = fetchAdminStatus(user_id);

    };


    useEffect(() => {
        const fetchData = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        }

        fetchData();

    }, []);


    const handeProductAdded = (productId) => {
        console.log(`Product added with ID ${productId}`);

        getProducts().then(setProducts);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1 className="text-3xl">Product list</h1>
            <ul data-testid="products-list" className="grid grid-cols-3 gap-4">
                {currentProducts.map((product) => (
                    <li class="product-listing p-2 mx-2 my-3" key={product.id} data-testid={`product-${product.id}`}>
                        <img src={`${getProductImage(product.name)}`} alt={product.name} className="max-w-64 max-h-64"/>
                        <b data-testid={`product-${product.id}-name`}>{product.name}</b>
                        <div data-testid={`product-${product.id}-quantity`}>
                            Stock: {product.amount_in_stock > 0 ? product.amount_in_stock : 'Sold out'}
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex mt-4">
                <div className="px-4">Go to: </div>
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (                 
                        <button 
                            key={i + 1} 
                            onClick={() => paginate(i + 1)} 
                            className="relative px-3 mb-2 pb-2 hover:bg-emerald-600 rounded"
                            data-testid={`page-button-${i+1}`}
                            >
                                {i + 1}
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></div>
                        </button>
                ))}
            </div>

            { is_admin && <AddProductForm onProductAdded={handeProductAdded} />}
        </div>
    );
};

export default ProductsPage;