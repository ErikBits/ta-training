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

export const getUserDetails = async (user_id) => {
    try {
        const response = await axios.get(`http://localhost:3002/api/users/details/${user_id}`);
        return response.data[0];
    } catch (error) {
        console.error('Error getting user details', error);
        return [];
    }
};

export const updateUserDetails = async (user_id, details) => {
    try {
        const response = await axios.put(`http://localhost:3002/api/users/details/${user_id}`, details);
        return response.data;
    } catch (error) {
        console.error('Error updating or creating user details', error);
        return [];
    }
}


export const getUser = async (user_id) => {
    try {
        const response = await axios.get(`http://localhost:3002/api/users/${user_id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting user.', error);
        return [];
    }
}

export const addProduct = async (productInfo) => {
    try {
        const response = await axios.put('http://localhost:3002/api/products/add-product', productInfo);
        // return response.data.productId;
        return {ok: true, data: {productId: response.data.productId } };

    } catch (error) {
        console.error('Error adding product');
        return {ok: false, message: error.message };
    }
}