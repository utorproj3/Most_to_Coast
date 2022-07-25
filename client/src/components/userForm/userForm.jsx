import React, { useState } from "react";
import AvatarHolder from "../../assets/img/Profile-holder.jpg";
import "./userForm.css";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [avatarPic, setAvatarPic] = useState(AvatarHolder);

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

  // can change username, description , and Icon URL/avatar!
  return (
    <div>
      <form>
        <div className="form-container">
          <div className="avatar-container">
            <img src={avatarPic} alt="avatarPicture" id="avatarPicture" />
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
          <div className="user-form">
            <div>
              <label>
                Username:
                <input
                  value={userName}
                  onChange={handleNameChange}
                  placeholder="Username"
                  id="username"
                  required
                />
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
                  rows={5}
                  required
                >
                  Hobbies, Activities, Personality..
                </textarea>
              </label>
            </div>
          </div>
        </div>

        <div className="flex-btn">
          <button type="reset" className="reset-btn">
            Reset/Edit
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
