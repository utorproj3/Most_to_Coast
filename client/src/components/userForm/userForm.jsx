import React, { useEffect, useState } from "react";

import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
// import AvatarHolder from "../../assets/img/Profile-holder.jpg";

import "./userForm.css";

// import querry ME
import { QUERY_ME } from "../../utils/queries";

// import mutation
import { EDIT_USER } from "../../utils/mutations";

var AvatarHolder =
  "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar-600x600.png";

const UserForm = () => {
  //  import loading and error, data is userData from QUERY_ME

  const { loading, error, data: allUserData } = useQuery(QUERY_ME);
  // const [getUserData, { data: allUserData }] = useLazyQuery(QUERY_ME);

  const UserData = allUserData?.me || [];

  const [userName, setUserName] = useState(UserData.username);
  const [aboutMe, setAboutMe] = useState(UserData.description);
  const [avatarPic, setAvatarPic] = useState(AvatarHolder);
  const [editMe, setEditMe] = useState(false);

  // mutation use
  const [editUser, { editUserError }] = useMutation(EDIT_USER);

  useEffect(() => {
    if (UserData) {
      console.log("RECEIVED DATA", UserData);
    }
    console.table(UserData);
    console.log(
      "LOGGING INFOO",
      UserData.username,
      UserData.iconUrl,
      UserData.description
    );
    setUserName(UserData.username);
    setAvatarPic(UserData.iconUrl);
    setAboutMe(UserData.description);
  });

  if (loading) {
    return <div>Loading Account...</div>;
  }
  if (error) return `Error!${error}`;

  const handleNameChange = async (e) => {
    e.preventDefault();

    var userNameInput = e.target.value.trim();

    if (userNameInput.length !== 0) {
      // else tell user to enter valid username
      setUserName(userNameInput);
    } else {
      setUserName(userName);
      console.log("Please enter a valid username:!");
      alert("Please enter a username");
    }
  };

  const handleDescriptionChange = async (e) => {
    e.preventDefault();

    var descpInput = e.target.value.trim();

    if (descpInput.length !== 0) {
      setAboutMe(descpInput);
    } else {
      setAboutMe(aboutMe);
      console.log("Please enter a description");
      alert("Please enter a description");
    }
  };
  const handleAvatarChange = async (e) => {
    e.preventDefault();
    var imgInput = e.target.value;

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
  const handleFormChanges = async (e) => {
    e.preventDefault();
    // set to opposite of edit Value

    // console.log("SUBMITTING TO BACKEND,", userName, avatarPic, aboutMe);

    try {
      await editUser({
        variables: {
          input: {
            username: userName,
            iconUrl: avatarPic,
            description: aboutMe,
          },
        },
      });
    } catch (e) {
      console.error("There was an error when pushing info to database", e);
    }

    setEditMe(!editMe);

    // change database backend to user input

    var userInformation = {
      username: userName,
      ironURL: avatarPic,
      description: aboutMe,
    };
    console.log("SUBMITTING TO BACKEND,", userInformation);
    try {
      await editUser({
        variables: {
          input: {
            userName,
            avatarPic,
            aboutMe,
          },
        },
      });
    } catch (e) {
      console.log("There was an error when pushing info to database", e);
    }
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
