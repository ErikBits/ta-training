import React, { useState, useEffect } from "react";
import AddProductForm from "./AdminViews/ManageProducts";
import { getProducts } from "../helpers/helpers.js";


const ProductsPage = () => {
    // What is usestate?
    const [products, setProducts] = useState([]);

    
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



    return (
        <div>
            <h2>Product list</h2>
            <ul>
                {products.map((product) => (
                    <li class="product-listing p-2 mx-2 my-3" key={product.id}>
                        <b>{product.name}</b>
                        <div>Stock: {product.amount_in_stock}</div>
                    </li>
                ))}
            </ul>

            <AddProductForm onProductAdded={handeProductAdded} />
        </div>
    );
};

export default ProductsPage;