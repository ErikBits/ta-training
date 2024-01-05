import React, { useState } from "react";
import axios from "axios";

const AddProductForm = ({ onProductAdded }) => {

    // idk what this does either
    const [productName, setProductName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/api/products/add-product', {
                productName: productName,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            });

            onProductAdded(response.data.productId);
            setProductName('');
        } catch (error) {
            console.error('Error adding the product:', error);
        }
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
            <button type="submit" class="btn btn-green">Add Product</button>
        </form>
    );
};

export default AddProductForm;