import React, { useState } from "react";
import "./Account.css";
import Auth from "../../utils/auth";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
const About = () => {
  const loggedIn = Auth.loggedIn();
  const [userName, setUserName] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const handleNameChange = (e) => {
    var userInput = e.target.value.trim();
    if (userInput.length !== 0) {
      setUserName(userInput);
    }
  };
  const handleDescriptionChange = (e) => {
    var descpInput = e.target.value.trim();
    if (descpInput.length !== 0) {
      setAboutMe(descpInput);
    }
  };

  return (
    // if NOT logged in, login/signup component, else (logged in), here's the Account Page
    <>
      {!loggedIn ? (
        <LoginSignUp />
      ) : (
        <div>
          <form>
            <div className="field-wrap">
              <label>
                Username:
                <input
                  placeholder="username"
                  required
                  onChange={handleNameChange}
                />
                Username
              </label>
              <label>
                About Me:
                <textarea
                  placeholder="About me.."
                  required
                  onChange={handleDescriptionChange}
                >
                  Hobbies, Activities, Personality..
                </textarea>
              </label>
            </div>
            <button>Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default About;
