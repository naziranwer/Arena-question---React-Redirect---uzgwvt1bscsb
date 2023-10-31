import React from "react";
import { Redirect, Link } from "react-router-dom";

function Login({ setIsUser }) {
  function handleClick() {
    setIsUser(true);
  }
  return (
    <div id="loginPage">
      <Link id="login-to-welcome" to="/">
        Welcome
      </Link>
      <br />
      <Link id="login-to-profile" to="/profile">
        Profile
      </Link>
      <br />

      <h2>Welcome To Login Page</h2>
      <h3>Can't access profile , please log in</h3>
      <br />
      <Link to="/profile">
        <button id="loginButton" onClick={handleClick}>
          Login
        </button>
      </Link>
    </div>
  );
}
export default Login;
