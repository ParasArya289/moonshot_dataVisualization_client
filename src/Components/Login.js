import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "./Login.css";
export const Login = ({ setSignUpOrLogin }) => {
  const { token, authLoading, loginUser } = useAuth();
  const formRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token && location.state && location.state.from) {
      navigate(location.state.from);
    } else if (token) {
      navigate("/");
    }
  }, [token]);

  const loginHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const userCred = Object.fromEntries(formData.entries());
    console.log(userCred);
    loginUser(userCred);
  };

  return (
    <div className="login">
      <form ref={formRef} className="login-form" onSubmit={loginHandler}>
        <h1 style={{ margin: 0 }}>Login</h1>

        <label htmlFor="username">
          Username
          <input type="text" name="username" placeholder="Username" required />
        </label>

        <label htmlFor="password">
          Password
          <input type="text" name="password" placeholder="Password" required />
        </label>

        <button disabled={authLoading} type="submit">
          {authLoading ? "Loading..." : "Submit"}
        </button>

        <div className="login-extra">
          Don't have an account{" "}
          <span
            disabled={authLoading}
            onClick={() => setSignUpOrLogin("signup")}
          >
            Signup
          </span>
        </div>
      </form>
    </div>
  );
};
