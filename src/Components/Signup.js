import { useRef } from "react";
import "./Login.css";
export const Signup = ({ setSignUpOrLogin }) => {
  const formRef = useRef(null);

  return (
    <div className="login">
      <form ref={formRef} className="login-form" onSubmit={"loginHandler"}>
        <h1 style={{ margin: 0 }}>Signup</h1>

        <label htmlFor="fullname">
          Full name
          <input type="text" name="fullname" placeholder="Full name" required />
        </label>

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
          Already have an account{" "}
          <span onClick={() => setSignUpOrLogin("login")}>Login</span>
        </div>
      </form>
    </div>
  );
};
