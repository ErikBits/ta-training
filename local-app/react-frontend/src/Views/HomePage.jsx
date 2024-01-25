import React, { useState, useEffect } from "react";
import { getProducts } from "../helpers/backendHelpers";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { getProductImage } from "../helpers/imageHelpers";

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
        <div className="flex space-x-4">
            <h1 data-testid="home-message">Browse our great products!</h1>

            <ul>
                {products.slice(0, 3).map((product) => 
                    <li className="product-listing p-2 mx-2 my-3" key={product.id} data-testid={`product-${product.id}`}>
                        <img src={`${getProductImage(product.name)}`} alt={product.name} className="max-w-48 max-h-48"/>
                        <b data-testid={`product-${product.id}-name`}>{product.name}</b>
                        <div className="text-gray-500" data-testid={`product-${product.id}-quantity`}>Stock:{product.amount_in_stock}</div>
                    </li>
                )}
            </ul>

        </div>
    );
};

export default HomePage;