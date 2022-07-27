import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';

export default function SignUpForm() {
    const navigate = useNavigate();
    const [addUser, { error }] = useMutation(ADD_USER);
    const [signupState, setSignupState] = useState({ username: "", email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupState({ ...signupState, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // execute addUser mutation and get Auth data
            const { data } = await addUser({
                variables: { ...signupState }
            });

            if (!data) {
                throw new Error('something went wrong!');
            }

            Auth.login(data.createUser.token); 
        } catch (err) {
            console.error(err);
        }
        
        setSignupState({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <form action="/" method="post" onSubmit={handleSubmit}>
            <div className='top-row'>
                <div className='field-wrap'>
                    <label htmlFor='username'>
                        Username<span className='req'></span>
                    </label>
                    <input
                        className='input-field'
                        type="text"
                        name="username"
                        required
                        defaultValue={signupState.username}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className='field-wrap'>
                <label htmlFor='email'>
                    Email Address<span className='req'></span>
                </label>
                <input
                    className='input-field'
                    type="email"
                    name="email"
                    required
                    value={signupState.email}
                    onChange={handleChange}
                />
            </div>

            <div className='field-wrap'>
                <label htmlFor='password'>
                    Set A Password<span className='req'></span>
                </label>
                <input
                    type="password"
                    name="password"
                    required
                    value={signupState.password}
                    onChange={handleChange}
                />
            </div>

            <button
                type='submit'
                className='button'
                onClick={function(){navigate('/main')}}
            >
                Get Started
            </button>

        </form>
    );
}
