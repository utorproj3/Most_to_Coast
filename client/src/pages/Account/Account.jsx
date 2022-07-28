import React from "react";
import "./Account.css";
import Auth from "../../utils/auth";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
import UserForm from "../../components/userForm/userForm";
const About = () => {
  const loggedIn = Auth.loggedIn();

  // todo MERGE CONFLICT

  // <<<<<<< HEAD
  return (
    // TODO  FIX LOGIC FOR LOGIN/USERFORM
    // if NOT logged in, login/signup component, else (logged in), here's the Account Page
    // UserForm used to state/change username, description about user, and icon/avatar pic
    // <>
    //   {!loggedIn ? (
    //     <LoginSignUp />
    //   ) : (
    //     <div>
    //       <UserForm />
    //     </div>
    //   )}
    // </>
    <div>
      <UserForm />
    </div>
  );
};

export default About;
// =======
// export default function Account() {
//     return (
//         <body>
//             <div className="row">
//                 <div className="col-1">
//                     <label>
//                         Profile picture (click to change)
//                     </label>
//                 </div>
//                 <div className="col-2">
//                     <label>
//                         Username
//                     </label>
//                     <br></br>
//                     <label>
//                         Bio
//                     </label>
//                 </div>
//                 <div className="col-3">
//                     <label>
//                         My Plans
//                     </label>
//                     <br></br>
//                     <label>
//                         __plans from backend__
//                     </label>
//                 </div>
//             </div>
//         </body>
//     )
// }
// >>>>>>> 05c7c8b4dd318ea0ff2c5754550411d49ff46d99
