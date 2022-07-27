import React, { useState } from "react";
import AvatarHolder from "../../assets/img/Profile-holder.jpg";
import "./userForm.css";

const UserForm = () => {
  // TODO read bootstrap docs for responsiveness
  // TODO you can have different states each value keep going

  const [userName, setUserName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [avatarPic, setAvatarPic] = useState(AvatarHolder);

  const [editMe, setEditMe] = useState(false);

  const handleNameChange = (e) => {
    e.preventDefault();

    var userInput = e.target.value.trim();
    console.log(userInput);
    console.log(userInput.length);
    if (userInput.length !== 0) {
      setUserName(userInput);
    } else {
      setUserName("");
      console.log("Please enter a username:!");
      alert("Please enter a username");
    }
  };
  const handleDescriptionChange = (e) => {
    e.preventDefault();

    var descpInput = e.target.value.trim();
    console.log(descpInput);
    console.log(descpInput.length);
    if (descpInput.length !== 0) {
      setAboutMe(descpInput);
    } else {
      setAboutMe("");
      console.log("Please enter a description");
      alert("Please enter a description");
    }
  };
  const handleAvatarChange = (e) => {
    e.preventDefault();
    var imgInput = e.target.value;
    setAvatarPic(imgInput);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // set to opposite of edit Value
    console.log(editMe);
    setEditMe(!editMe);
  };

  // edit button clicked? show Form, else, DISPLAY-ONLY variables
  // can change username, description , and Icon URL/avatar!
  return (
    <>
      {editMe ? (
        <div className="grid text-center d-flex justify-content-center">
          <div className="g-col-12">
            <div className="userForm mx-4">
              <div>
                <div className="form-card ">
                  <img src={avatarPic} alt="avatarPicture" id="avatarPicture" />
                  <div className="avatar-container">
                    <div className="input-container">
                      <label>
                        Choose an Avatar[URL]:
                        <input
                          // TODO CHANGE FILE TO STRING, TO ALLOW FOR GOOGLE DOC/URL!
                          type="text"
                          id="avatar"
                          onChange={handleAvatarChange}
                          className="user-input"
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label>
                        Username:
                        <input
                          value={userName}
                          onChange={handleNameChange}
                          placeholder="Username"
                          id="username"
                          className="user-input"
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label className="labelAboutme">
                        About:
                        <textarea
                          value={aboutMe}
                          onChange={handleDescriptionChange}
                          placeholder="About me.."
                          id="about-me"
                          rows={5}
                          cols={30}
                          required
                        >
                          Hobbies, Activities, Personality..
                        </textarea>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex-btn">
                  <button
                    type="reset"
                    className="reset-btn"
                    onClick={handleEditSubmit}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid text-center d-flex justify-content-center">
            {/* bootstrap rsponsive */}
            <div className="g-col-12">
              <div className="userForm  mx-4">
                <form>
                  <div className="form-container">
                    <div className="avatar-container">
                      <img
                        src={avatarPic}
                        alt="avatarPicture"
                        id="avatarPicture"
                      />
                    </div>
                    <div>
                      <div className="username">
                        <h1>Username:</h1>
                        <span className="user-input">USERNAMEHERE</span>
                      </div>
                      <div className="aboutme">
                        <h1>About:</h1>
                        <span className="user-input text-wrap">
                          "Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architectod"
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-btn">
                    <button
                      type="submit"
                      className="edit-btn"
                      onClick={handleEditSubmit}
                    >
                      Edit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserForm;
