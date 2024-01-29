import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useToken from "../../hooks/useToken";
import useDocumentTitle from "../../hooks/useDocumentTitle";
// import axios from "axios";

async function loginUser(credentials) {

    try {
        // TODO: verify if this via axios is working. move to helper functions
        // const response = await axios.post('http://localhost:3002/api/user-login', credentials);
        const response = await fetch('http://localhost:3002/api/user-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if(!response.ok) {
            //handle errors
            const errorData = await response.json();
            console.log('response nok', errorData.error);
            throw new Error(errorData.error);
        }

        const data = await response.json();
        return { token: data.token, user_id: data.user_id };

    } catch (error) {

        // handle server errors
        console.error('Login failed:', error.message);
        throw new Error(error.message);
    }
}


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const { token, setToken } = useToken(); /* eslint-disable-line */

    const navigate = useNavigate();

    // const location = useLocation(); // location.pathname returns slashes as well as hyphens -> ill pass it manually for now
    useDocumentTitle("Login");

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const login_info = await loginUser({
                username,
                password
            });

            setToken(login_info.token);


            //TODO: replace with actual token instead of dummy token
            if (login_info.token === 'token12') {

                localStorage.setItem('user_id', login_info.user_id);
                
                navigate('/profile');
                
            }


        } catch (error) {
            
            console.error('Login error', error.message);
            setErrorMessage(error.message);
        }

    };

    useEffect(() => {
        setErrorMessage('');
    }, [username, password]);

    return(
        <div className="login-wrapper">
            
            {errorMessage && (
                <div id="alert-border-3" class="flex items-center p-4 mb-4 text-gray-800 border-t-4 border-red-600 bg-red-100" role="alert">
                    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <div class="ms-3 text-sm font-medium">
                        {errorMessage}
                    </div>
                </div>
            )}



            <h1 className="p-1 font-semibold text-xl">Please Log in:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p className="p-1">Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} data-testid="username-input" placeholder="Enter username" className="p-1"/>
                </label>
                <label>
                    <p className="p-1">Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} data-testid="password-input" placeholder="Enter password" className="p-1"/>
                </label>

                <div>
                    <button className="btn btn-green my-1" type="submit" data-testid="login-submit">Sign in</button>
                </div>


            </form>
        </div>
    );
};

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default LoginPage;