import React from "react";
import "./Account.css";
import UserForm from "../../components/userForm/userForm";
const About = () => {
  const handleNotification = () => {
    console.log("CLICKED!");
  };
  return (
    <div>
      <UserForm />
      <div>
        <button onClick={handleNotification}>default</button>
      </div>
    </div>
  );
};

export default About;
