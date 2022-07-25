import React, { useState } from "react";
import AvatarHolder from "../../assets/img/Profile-holder.jpg";

const UserForm = () => {
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

  // can change username, description , and Icon URL/avatar!
  return (
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
  );
};

export default UserForm;
