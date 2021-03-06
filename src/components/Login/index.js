import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { CheckLoginDetails } from "../../utils/services/LoginService";

export const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const {
      target: { id, value }
    } = e;
    setUser((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    CheckLoginDetails(user);
  };
  const CheckLoginDetails = (user) => {
    const payload = {
      username: user.username,
      password: user.password
    };
    fetch("./data/users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((users) => {
        let validuser = users.filter((user) => {
          return (
            user.username === payload.username &&
            user.password === payload.password
          );
        });
        if (validuser.length) {
          setError(false);
          localStorage.setItem("user",payload);
          history.push("/home/calendar");
        } else {
          setError(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div  className="meeting-container">
      <form className="form">
        <div className="formFields">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="formFields">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" onClick={handleLogin} />
      </form>
      {error ? <div className="error-field">Not a valid user !!!</div> : null}
    </div>
  );
};
