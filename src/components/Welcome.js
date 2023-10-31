import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
const Welcome = () => {
  return (
    <div id="welcomePage">
      <Link id="welcome-to-profile" to="/profile">
        Profile
      </Link>
      <br />
      <Link id="welcome-to-login" to="/login">
        Login
      </Link>
      <h1>
        Welcome to starting page
        <br /> Buddy!!
      </h1>

      <div></div>
    </div>
  );
};
export default Welcome;
