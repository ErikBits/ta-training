import React from "react";
import useToken from "../hooks/useToken";
import LoginPage from "./Auth/Login";

const ProfilePage = () => {
    
    const { token, setToken } = useToken();
    // const { token } = useToken();

    // const navigate = useNavigate();

    // the other appraoch does not seem to work. I need to supply the function with this function otherwise it doesnt work. Need to figure out how to adapt this
    if(!token) {
        return <LoginPage setToken={setToken} />
    } else {
        return(
            <div>
                <h1 >You are logged in</h1>
            </div>
        )
    }

    // if user not logged in, redirect to login page
    // useEffect(() => {
    //     if (!token) {
    //         navigate('/login');
    //     }
    // }, [token, navigate]);


    // if (token) {
    //     return(
    //         <div>
    //             <h1>You are logged in</h1>
    //         </div>
    //     )
    // }

};

export default ProfilePage;