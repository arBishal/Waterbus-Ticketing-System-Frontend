import adminLoginStyle from "./adminLogin.module.css";

export default function AdminLogin() {
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
        >
          Submit
        </span>
      </form>
    </div>
  );
}
