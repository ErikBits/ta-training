import React, { useState, useEffect } from "react";
import AddProductForm from "./AdminViews/ManageProducts";
import { getProducts, getUser } from "../helpers/backendHelpers.js";


const ProductsPage = () => {
    // What is usestate?
    const [products, setProducts] = useState([]);

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



    return (
        <div>
            <h2>Product list</h2>
            <ul>
                {products.map((product) => (
                    <li class="product-listing p-2 mx-2 my-3" key={product.id} id={`product-${product.id}`}>
                        <b id={`product-${product.id}-name`}>{product.name}</b>
                        <div id={`product-${product.id}-quantity`}>Stock: {product.amount_in_stock}</div>
                    </li>
                ))}
            </ul>

            { is_admin && <AddProductForm onProductAdded={handeProductAdded} />}
        </div>
    );
};

export default ProductsPage;