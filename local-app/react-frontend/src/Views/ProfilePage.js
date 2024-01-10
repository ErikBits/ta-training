import React from "react";
import useToken from "../hooks/useToken";
import { Navigate } from "react-router-dom";

const ProfilePage = () => {
    
    const { token, setToken } = useToken(); /* eslint-disable-line */
    
    if(token === null) {

        return <Navigate to="/login" />
    
    } else {
        return(
            <div>
                <h1 >You are logged in</h1>
            </div>
        )
    }
};

export default ProfilePage;