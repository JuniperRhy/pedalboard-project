import React, { useState } from "react";

function NewUser() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password_digest: password,
      }),
    }).then((res) => res.json());
    window.location.href = "/login";
  };
  return (
    <div>
      <h1 className="new-user-head">New User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Name
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Username
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Password
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default NewUser;
