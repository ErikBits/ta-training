import React, { useState } from "react";
import { addProduct } from "../../helpers/helpers";

const AddProductForm = ({ onProductAdded }) => {

    const [productName, setProductName] = useState('');
    const [productQuantity, setProductQuantity] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productId = await addProduct({
            productName: productName,
            amount_in_stock: productQuantity
        });

        onProductAdded(productId);

        setProductName('');
        setProductQuantity(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Product Name:
                <input 
                    type="text"
                    name="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </label>
            <br />

            <label>
                Quantity:
                <input
                    type="text"
                    name="amount_in_stock"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                />
            </label>
            <br />

            <button type="submit" class="btn btn-green">Add Product</button>
        </form>
    );
};

export default AddProductForm;