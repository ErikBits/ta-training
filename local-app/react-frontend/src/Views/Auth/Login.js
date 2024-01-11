import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useToken from "../../hooks/useToken";

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
        return { token: data.token, user_id: data.user_id };

    } catch (error) {

        // handle server errors
        console.error('Login failed:', error.message);
        throw new Error('Login failed. Please try again');
    }
}


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { token, setToken } = useToken(); /* eslint-disable-line */

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const login_info = await loginUser({
                username,
                password
            });

            console.log(login_info);

            setToken(login_info.token);


            //TODO: replace with actual token instead of dummy token
            if (login_info.token === 'token12') {

                localStorage.setItem('user_id', login_info.user_id);
                
                navigate('/profile');
            }


        } catch (error) {
            //provide user feedback
            console.error('Login error', error.message);
            return; //early exit if login fails
        }

    };

    return(
        <div className="login-wrapper">
            <h1>Please Log in</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} id="username-input"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} id="password-input"/>
                </label>

                <div>
                    <button className="btn btn-green" type="submit" id="login-submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default LoginPage;