import React, { useState } from "react";
import "./Account.css";
import Auth from "../../utils/auth";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
import AvatarHolder from "../../assets/img/Profile-holder.jpg";
const About = () => {
  const loggedIn = Auth.loggedIn();
  const [userName, setUserName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [avatarPic, setAvatarPic] = useState({ AvatarHolder });

  const handleNameChange = (e) => {
    var userInput = e.target.value.trim();
    if (userInput.length !== 0) {
      setUserName(userInput);
    }
    console.log("Please enter a username:!");
  };
  const handleDescriptionChange = (e) => {
    var descpInput = e.target.value.trim();
    if (descpInput.length !== 0) {
      setAboutMe(descpInput);
    }
    console.log("Please enter a description");
  };
  const handleAvatarChange = (e) => {
    var imgInput = e.target.value;
    setAvatarPic(imgInput);
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
                  value={userName}
                  onChange={handleNameChange}
                  placeholder="username"
                  id="username"
                  required
                />
                Username
              </label>
            </div>
            <div>
              <label>
                About Me:
                <textarea
                  value={aboutMe}
                  onChange={handleDescriptionChange}
                  placeholder="About me.."
                  id="about-me"
                  required
                >
                  Hobbies, Activities, Personality..
                </textarea>
              </label>
            </div>
            <div>
              <img src={avatarPic} alt="avatarPicture" />
              <label>
                Choose an Avatar:
                <input
                  type="file"
                  id="avatar"
                  accept="image/png, image/jpeg"
                  onChange={handleAvatarChange}
                />
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default About;
