import React, { useState } from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Welcome from "./Welcome";
import PageNotFound from "./PageNotFound";

function App() {
  const [isUser, setIsUser] = useState(false);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login setIsUser={setIsUser} />
          </Route>
          <Route exact path="/profile">
            <Profile setIsUser={setIsUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
