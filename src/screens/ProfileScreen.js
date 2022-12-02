import React from "react";
import Nav from "../Nav";
import "./ProfileScreen.css";
import {useSelector} from "react-redux";
import {selectuser} from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectuser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <button onClick={() => {auth.signOut()} }  className="profileScreen__signOut">Sign Out</button>
              {/* auth.signOut it calls the signout from the auth service of firebase and changes the user value to null  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
