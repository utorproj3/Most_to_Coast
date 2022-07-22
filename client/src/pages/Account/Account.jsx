import React from "react";
import "./Account.css";
import Auth from "../../utils/auth";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
const About = () => {
  const loggedIn = Auth.loggedIn();

  return (
    // if NOT logged in, login/signup component, else (logged in), here's the Account Page
    <>
      {!loggedIn ? (
        <LoginSignUp />
      ) : (
        <div>Thanks for logging in, Enter a travel plan</div>
      )}
    </>
  );
};

export default About;
