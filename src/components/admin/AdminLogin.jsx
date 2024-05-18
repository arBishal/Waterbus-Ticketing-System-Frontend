import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import adminLoginStyle from "./adminLogin.module.css";

export default function AdminLogin() {
  const history = useHistory();
  const handleClick = useCallback(() => history.push('/admin/dashboard'), [history]);

  return (
    <div className={adminLoginStyle.login}>
      <h1 className={adminLoginStyle.title}>Admin Login</h1>
      <form className={adminLoginStyle.form}>
        <div className={adminLoginStyle.innerForm}>
          <label> Username </label>
          <input className={adminLoginStyle.input} type="text" />
          <label> Password </label>
          <input className={adminLoginStyle.input} type="password" />
        </div>
        <span
          className={adminLoginStyle.button}
          style={{ marginTop: "16px" }}
          onClick={handleClick}
        >
          Submit
        </span>
      </form>
    </div>
  );
}
