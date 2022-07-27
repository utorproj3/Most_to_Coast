import React from "react";
import "./LoginSignUp.css";
import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm";

export default function LoginSignUp() {

    return (
        <section>

            <img src="img/Most2Coast.png" className="logo" alt="airplanelogo" />

            <div className='full-form'>

                <div className='tab-content'>
                    <div id="signup">

                        <h1>Sign Up</h1>
                        <SignUpForm />
                    </div>

                    <div id='login'>

                        <h1>Welcome Back</h1>
                        {/* <LoginForm /> */}

                    </div>
                </div>
            </div>
        </section>
    )
}