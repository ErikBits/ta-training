import axios from "axios";

export const getProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3002/api/products/get-all');
        return response.data;
    } catch (error) {
        console.error('Error getting products:', error);
        return [];
    }
};