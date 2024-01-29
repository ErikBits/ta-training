import React, { useState } from "react";
import { addProduct } from "../../helpers/backendHelpers";
import { toast, Toaster } from "react-hot-toast"

const AddProductForm = ({ onProductAdded }) => {

    const [productName, setProductName] = useState('');
    const [productQuantity, setProductQuantity] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await addProduct({
                productName: productName,
                amount_in_stock: productQuantity
            });

    
            if (response.ok) {
                onProductAdded(response.data.productId);

                toast.success(`Product added with id: ${response.data.productId}` );
    
                setProductName('');
                setProductQuantity(0);
            } else {
                throw new Error(response.message);
            }

        } catch (error) {
            console.error('Error adding product:', error.message);
            toast.error(error.message);
        }

    };
    return (
        <div className="space-y-2 center-between">
            <div>
                <Toaster 
                    position="bottom-center"
                />
            </div>

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