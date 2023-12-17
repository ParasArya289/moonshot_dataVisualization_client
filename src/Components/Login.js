import { useRef } from "react";
import "./Login.css";
export const Login = ({ setSignUpOrLogin }) => {
  const formRef = useRef(null);

  return (
    <div className="login">
      <form ref={formRef} className="login-form" onSubmit={"loginHandler"}>
        <h1 style={{ margin: 0 }}>Login</h1>

        <label htmlFor="username">
          Username
          <input type="text" name="username" placeholder="Username" required />
        </label>

        <label htmlFor="password">
          Password
          <input type="text" name="password" placeholder="Password" required />
        </label>

        <button disabled={"authLoading"} type="submit">
          {false ? "Loading..." : "Submit"}
        </button>

        <div className="login-extra">
          Don't have an account{" "}
          <span onClick={() => setSignUpOrLogin("signup")}>Signup</span>
        </div>
      </form>
    </div>
  );
};
