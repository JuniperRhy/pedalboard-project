import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1 className="login-head">Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            className="input-field"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            className="input-field"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
      <a className="new-user-link" href="./newuser">
        New User? Sign up!
      </a>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
