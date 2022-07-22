import React, { useState } from "react";
import "./LoginSignUp.css";

export default function LoginSignUp() {
    return (
        <body>
            <div className='full-form'>
                {/* <ul className='tab-group'>
                    <li className='tab-active'><a href="#signup"></a>Sign Up</li>
                    <li className='tab'><a href="#login">Log In</a></li>
                </ul> */}

                <div className='tab-content'>
                    <div id="signup">

                        <h1>Sign Up</h1>

                        <form action="/" method="post">

                            <div className='top-row'>
                                <div className='field-wrap'>
                                    <label>
                                        First Name<span className='req'></span>
                                    </label>
                                    <input type='text' required autocomplete="off" />
                                </div>
                                <div className='field-wrap'>
                                    <label>
                                        Last Name<span className='req'></span>
                                    </label>
                                    <input type="text" required autocomplete="off" />
                                </div>
                            </div>

                            <div className='field-wrap'>
                                <label>
                                    Email Address<span className='req'></span>
                                </label>
                                <input type="email" required autocomplete="off" />
                            </div>

                            <div className='field-wrap'>
                                <label>
                                    Set A Password<span className='req'></span>
                                </label>
                                <input type="password" required autocomplete="off" />
                            </div>

                            <button type="submit" className='button'>Get Started</button>

                        </form>
                    </div>

                    <div id='login'>
                        <h1>Welcome Back</h1>

                        <form action="/" method="post">

                            <div className='field-wrap'>
                                <label>
                                    Email Address<span className='req'></span>
                                </label>
                                <input type="email" required autocomplete="off" />
                            </div>

                            <div className='field-wrap'>
                                <label>
                                    Password<span className='req'></span>
                                </label>
                                <input type="password" required autocomplete="off" />
                            </div>

                            <button className='button'>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    )
}