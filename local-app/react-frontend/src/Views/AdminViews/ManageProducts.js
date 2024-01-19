import React, { useState } from "react";
import { addProduct } from "../../helpers/backendHelpers";

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
    // p-2 mx-2 my-3
    return (
        <div className="space-y-2 center-between">
            <div className="text-2xl font-semibold">Add a product:</div>
            
            <form onSubmit={handleSubmit} className="space-y-1">
                <label>
                    Product Name:
                    <input 
                        type="text"
                        name="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        data-testid="product-name-input"
                        placeholder="Enter name"
                        className="p-2"
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
                        data-testid="product-quantity-input"
                        className="p-2"
                    />
                </label>
                <br />

                <button type="submit" class="btn btn-green" data-testid="add-product-submit">Add Product</button>
            </form>
        </div>

    );
};

export default AddProductForm;