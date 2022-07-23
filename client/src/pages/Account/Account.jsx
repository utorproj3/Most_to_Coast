import React from "react";
import "./Account.css";
import Auth from "../../utils/auth";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
import UserForm from "../../components/userForm/userForm";
const About = () => {
  const loggedIn = Auth.loggedIn();

  return (
    // if NOT logged in, login/signup component, else (logged in), here's the Account Page
    // UserForm used to state/change username, description about user, and icon/avatar pic
    <>
      {!loggedIn ? (
        <LoginSignUp />
      ) : (
        <di>
          <UserForm />
          <div></div>
        </di>
      )}
    </>
  );
};

export default About;
