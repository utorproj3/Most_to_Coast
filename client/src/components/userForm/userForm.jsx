import React, { useState } from "react";
import AvatarHolder from "../../assets/img/Profile-holder.jpg";
import "./userForm.css";

const UserForm = () => {
  // TODO read bootstrap docs for responsiveness
  // TODO you can have different states each value keep going

  const [userName, setUserName] = useState("username");
  const [aboutMe, setAboutMe] = useState("aboutme");
  const [avatarPic, setAvatarPic] = useState(AvatarHolder);
  const [cancelForm, setCancelForm] = useState(false);
  const [changes, setChanges] = useState(false);

  // cancel edits
  const [editMe, setEditMe] = useState(false);
  console.log(changes, "CHANGES", editMe, "EDITME");

  const handleNameChange = (e) => {
    e.preventDefault();

    var userNameInput = e.target.value.trim();

    if (userNameInput.length !== 0) {
      if (changes === true) {
        setUserName(userNameInput);
      }
    } else {
      setUserName(userName);
      console.log("Please enter a valid username:!");
      alert("Please enter a username");
    }
  };
  const handleDescriptionChange = (e) => {
    e.preventDefault();

    var descpInput = e.target.value.trim();

    if (descpInput.length !== 0) {
      if (changes === true) {
        console.log(aboutMe, "CHANGING TO ", descpInput);
        setAboutMe(descpInput);
      } else {
        setAboutMe(aboutMe);
      }
    } else {
      setAboutMe(aboutMe);
      console.log("Please enter a description");
      alert("Please enter a description");
    }
  };
  const handleAvatarChange = (e) => {
    e.preventDefault();
    var imgInput = e.target.value;
    console.log(imgInput);
    if (changes === true) {
      setAvatarPic(imgInput);
    } else {
    }
  };
  const handleEditCancelSubmit = (e) => {
    e.preventDefault();
    setCancelForm(true);

    setEditMe(!editMe);
  };

  const handleFormChanges = (e) => {
    e.preventDefault();
    // set to opposite of edit Value
    setChanges(true);

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
                          onChange={handleDescriptionChange}
                          placeholder="About me.."
                          id="about-me"
                          rows={5}
                          cols={30}
                          required
                        ></textarea>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex-btn">
                  <button
                    type="button"
                    className="reset-btn"
                    onClick={handleEditCancelSubmit}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="submit-btn"
                    onClick={handleFormChanges}
                  >
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
                        <span className="user-input">{userName}</span>
                      </div>
                      <div className="aboutme">
                        <h1>About:</h1>
                        <span className="user-input text-wrap">{aboutMe}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-btn">
                    <button
                      type="submit"
                      className="edit-btn"
                      onClick={handleEditCancelSubmit}
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
