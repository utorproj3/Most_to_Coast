import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css";

export default function LoginSignUp() {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/main")
    }

    return (
        <body>

            <img src="img/Most2Coast.png" className="logo" alt="airplanelogo" />

            <div className='full-form'>

                <div className='tab-content'>
                    <div id="signup">

                        <h1>Sign Up</h1>

                        <form action="/" method="post" onSubmit={handleSubmit}>

                            <div className='top-row'>
                                <div className='field-wrap'>
                                    <label>
                                        First Name<span className='req'></span>
                                    </label>
                                    <input type='text' required autocomplete="off" className='input-field' />
                                </div>
                                <div className='field-wrap'>
                                    <label>
                                        Last Name<span className='req'></span>
                                    </label>
                                    <input type='text' required autocomplete="off" className='input-field' />
                                </div>
                            </div>

                            <div className='field-wrap'>
                                <label>
                                    Email Address<span className='req'></span>
                                </label>
                                <input type='email' required autocomplete="off" className='input-field' />
                            </div>

                            <div className='field-wrap'>
                                <label>
                                    Set A Password<span className='req'></span>
                                </label>
                                <input type='password' required autocomplete="off" className='input-field' />
                            </div>

                            <button type='submit' className='button'>Get Started</button>

                        </form>
                    </div>

                    <div id='login'>
                        <h1>Welcome Back</h1>

                        <form action="/" method="post" onSubmit={handleSubmit}>

                            <div className='field-wrap'>
                                <label>
                                    Email Address<span className='req'></span>
                                </label>
                                <input type="email" required autocomplete="off" className='input-field' />
                            </div>

                            <div className='field-wrap'>
                                <label>
                                    Password<span className='req'></span>
                                </label>
                                <input type="password" required autocomplete="off" className='input-field' />
                            </div>

                            <button type='submit' className='button'>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    )
}