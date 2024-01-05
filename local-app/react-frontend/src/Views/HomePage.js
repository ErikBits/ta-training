import React, { useState, useEffect } from "react";
import { getProducts } from "../helpers/helpers";

const HomePage = () => {

    const [products, setProducts] = useState([]);

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
                    <li class="product-listing p-2 mx-2 my-3" key={product.id}>
                        <b>{product.name}</b>
                        <div>Stock:{product.amount_in_stock}</div>
                    </li>
                )}
            </ul>

        </div>
    );
};

export default HomePage;