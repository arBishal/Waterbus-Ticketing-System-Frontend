import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import adminLoginStyle from "./admin.module.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const handleClick = useCallback(
    () => history.push("/admin/dashboard"),
    [history]
  );

  const handleLogin = () => {
    if (username !== password)
      window.alert("Username and Password doesn't match!");
    else handleClick();
  };

  return (
    <div className={adminLoginStyle.page}>
      <h1 className={adminLoginStyle.title}>Admin Login</h1>
      <form className={adminLoginStyle.form}>
        <div className={adminLoginStyle.innerForm}>
          <label> Username </label>
          <input
            className={adminLoginStyle.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label> Password </label>
          <input
            className={adminLoginStyle.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span
          className={adminLoginStyle.button}
          style={{ marginTop: "16px" }}
          onClick={handleLogin}
        >
          Submit
        </span>
      </form>
    </div>
  );
}
