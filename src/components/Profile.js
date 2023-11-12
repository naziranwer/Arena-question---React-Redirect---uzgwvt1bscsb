import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
const Profile = ({ isUser, setIsUser }) => {
  console.log(isUser);

  if (!isUser) {
    return <Redirect to="/login" />;
  }

  const onButtonClick = () => {
    setIsUser(false);
  };
  return (
    <div id="profilePage">
      <Link id="profile-to-welcome" to="/">
        Welcome Page
      </Link>
      <br />
      <Link id="profile-to-login" to="/login">
        Login
      </Link>
      <h2>Welcome to the Profile page</h2>
      <button id="logoutButton" onClick={onButtonClick}>
        Log Out
      </button>
    </div>
  );
};
export default Profile;
