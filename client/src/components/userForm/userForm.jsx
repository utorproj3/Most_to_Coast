import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import AvatarHolder from "../../assets/img/Profile-holder.jpg";
import "./userForm.css";

// import querry ME
import { QUERY_ME } from "../../utils/queries";

// TODO CONNECT ACCOUNT PAGE TO BACKEND!
// TODO USE QUERIES + MUTATIONS
const UserForm = () => {
  // import loading and error, data is userData from QUERY_ME
  const { loading, error, data: userData } = useQuery(QUERY_ME);
  console.log(userData);
  console.log(userData["me"].username);
  console.log(userData["me"].description);
  // var queryDBUserName = userData["me"].username || "loadingusername";
  const [userName, setUserName] = useState(userData["me"].username);
  const [aboutMe, setAboutMe] = useState(userData["me"].description);
  const [avatarPic, setAvatarPic] = useState(AvatarHolder);
  const [editMe, setEditMe] = useState(false);

  const allUserData = userData?.me || [];

  useEffect(() => {
    if (userData) {
      console.log(userData.me);
    }
  }, []);

  if (loading) {
    return <div>Loading Account...</div>;
  }
  if (error) return `Error!${error}`;

  const handleNameChange = (e) => {
    e.preventDefault();

    var userNameInput = e.target.value.trim();

    if (userNameInput.length !== 0) {
      setUserName(userNameInput);
      // else tell user to enter valid username
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
      console.log(aboutMe, "CHANGING TO ", descpInput);
      setAboutMe(descpInput);
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

    setAvatarPic(imgInput);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    setEditMe(!editMe);
  };
  const handleCancelSubmit = (e) => {
    e.preventDefault();
    //todo set everything back manually, change this when you change state too
    setUserName("username");
    setAboutMe("aboutme");
    setAvatarPic(AvatarHolder);

    setEditMe(!editMe);
  };
  const handleFormChanges = (e) => {
    e.preventDefault();
    // set to opposite of edit Value

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
                    <div>
                      <label>
                        Choose an Avatar[URL]:
                        <input
                          type="text"
                          id="avatar"
                          onChange={handleAvatarChange}
                          className="user-input"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="label-input">
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
                    <div className="label-input">
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
                    onClick={handleCancelSubmit}
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
