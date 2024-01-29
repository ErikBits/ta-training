import React, { useState, useEffect } from "react";
import useToken from "../hooks/useToken";
import { Navigate } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../helpers/backendHelpers";
import { validateUserDetails } from "../helpers/validationHelpers";
import useDocumenTitle from "../hooks/useDocumentTitle";

import { toast, Toaster } from "react-hot-toast"


const ProfilePage = () => {

    const { token, setToken } = useToken(); /* eslint-disable-line */

    useDocumenTitle("Profile");

    const [userDetails, setUserDetails] = useState({
        gender: 1,
        address: "",
        country: 1,
        postal_code: "",
    });
    

    useEffect(() => {

        if (!token) {
            return;
        }

        const fetchData = async () => {
            try {
                const user_id = localStorage.getItem('user_id');
                const fetchedUserDetails = await getUserDetails(user_id);
                setUserDetails(fetchedUserDetails);
                
            } catch (error) {
                console.error('Error getting user details:', error);
            }

        };

        fetchData();
    }, [token, setUserDetails]); //so it seems useEffect updates when these functions are called or these variables change?


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };


    const handleSave = async () => {

        try {

            const user_id = localStorage.getItem('user_id');

            const fetchedUserDetails = await getUserDetails(user_id);

            //attempt: see if entry exists and update otherwise
            if (fetchedUserDetails.length > 0) {
                const existingDetails = fetchedUserDetails[0];

                //TODO: figure out what this notation is and how it works
                const updatedDetails = { ...existingDetails, ...userDetails };

                if (!validateUserDetails(updatedDetails)) {
                    return; //stop execution if validation fails
                }

                await updateUserDetails(user_id, updatedDetails);

            } else {
                //create new entry
                const user_id = localStorage.getItem('user_id');

                if (!validateUserDetails(userDetails)) {
                    return; //stop execution if validation fails
                }

                await updateUserDetails(user_id, userDetails);

            }

            toast.success('Details updated succesfully');

        } catch (error) {
            console.error("Error updating user details:", error);
            // toast.error(error);
        }
    };

    if(!token) {
        return <Navigate to="/login" />
    }

    return(
        <div>
            <div>
                <Toaster />
            </div>
            <h1 className="py-4">You are logged in</h1>
            

            <div className="p-1">Change user details:</div>
            <form>
                <label className="p-1">
                    Gender:
                    <select 
                        value={userDetails.gender}
                        name="gender"
                        onChange={handleInputChange}
                        data-testid="user-details-gender"
                    >
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                        <option value="3">Other</option>
                    </select>
                </label>
                <br />

                <label className="p-1">
                    Address:
                    <input 
                        type="text"
                        name="address"
                        value={userDetails.address}
                        onChange={handleInputChange}
                        data-testid="user-details-address"
                        className="text-gray-600"
                    />
                </label>
                <br />

                <label className="p-1">
                    Country:
                    <select 
                        value={userDetails.country}
                        name="country"
                        onChange={handleInputChange}
                        data-testid="user-details-country"
                    >
                        <option value="1">The Netherlands</option>
                        <option value="2">Belgium</option>
                        <option value="3">Germany</option>
                    </select>
                </label>
                <br />

                <label className="p-1">
                    Postal Code:
                    <input
                        type="text"
                        name="postal_code"
                        value={userDetails.postal_code}
                        onChange={handleInputChange}
                        data-testid="user-details-postal-code"
                        className="text-gray-600"
                    />
                </label>
                <br />

                <button type="button" onClick={handleSave} id="user-details-submit" class="btn btn-green">Save</button>
            </form>

        </div>
    )
};

export default ProfilePage;