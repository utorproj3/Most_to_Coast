import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

export default function LoginForm() {
    const [loginUser, { error }] = useMutation(LOGIN_USER);
    const [loginState, setLoginState] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginState({ ...loginState, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // execute loginUser mutation and get Auth data
            const { data } = await loginUser({
                variables: { ...loginState }
            });

            if (!data) {
                throw new Error('something went wrong!');
            }

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        setLoginState({
            email: '',
            password: '',
        });
    };

    if (Auth.loggedIn()) {
        return <Navigate to='/main' />;
    }

    return (
        <form action="/" method="post" onSubmit={handleSubmit}>

            <div className='field-wrap'>
                <label htmlFor='email'>
                    Email Address<span className='req'></span>
                </label>
                <input
                    className='input-field'
                    type="email"
                    name='email'
                    required
                    value={loginState.email}
                    onChange={handleChange}
                />
            </div>

            <div className='field-wrap'>
                <label htmlFor='password'>
                    Password<span className='req'></span>
                </label>
                <input type="password"
                    name="password"
                    required
                    value={loginState.password}
                    onChange={handleChange}
                />
            </div>

            <button
                type='submit'
                className='button'
            >
                Log In
            </button>
        </form>
    )
}