import React, { useState, useEffect } from "react";
import { getProducts } from "../helpers/backendHelpers";
import useDocumentTitle from "../hooks/useDocumentTitle";

const HomePage = () => {

    const [products, setProducts] = useState([]);

    useDocumentTitle();

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        };

        fetchData();
    }, []);


    return (
        <div class="flex space-x-4">
            <h1>Browse our great products!</h1>

            <ul>
                {products.slice(0, 3).map((product) => 
                    <li class="product-listing p-2 mx-2 my-3" key={product.id} data-testid={`product-${product.id}`}>
                        <b data-testid={`product-${product.id}-name`}>{product.name}</b>
                        <div data-testid={`product-${product.id}-quantity`}>Stock:{product.amount_in_stock}</div>
                    </li>
                )}
            </ul>

        </div>
    );
};

export default HomePage;