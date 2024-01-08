import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// LOGIN STUB FOR NOW

async function loginUser(credentials) {

    try {
        const response = await fetch('http://localhost:3002/api/user-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if(!response.ok) {
            //handle errors
            throw new Error('Undescript user error');
        }


        const data = await response.json();
        return data.token;

    } catch (error) {

        // handle server errors
        console.error('Login failed:', error.message);
        throw new Error('Login failed. Please try again');
    }
}

const LoginPage = ({ setToken }) => {
// const LoginPage = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    // const { token, setToken } = useToken();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const token = await loginUser({
                username,
                password
            });

            setToken(token);

            // navigate('/profile');

        } catch (error) {
            //provide user feedback
            console.error('Login error', error.message);
            return; //early exit if login fails
        }
    };

    useEffect(() => {
        if (setToken && setToken !== undefined) {
            navigate("/profile");
        }
    }, [setToken, navigate]);

    return(
        <div className="login-wrapper">
            <h1>Please Log in</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>

                <div>
                    <button className="btn btn-green" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default LoginPage;