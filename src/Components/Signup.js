import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "./Login.css";
export const Signup = ({ setSignUpOrLogin }) => {
  const formRef = useRef(null);
  const { token, authLoading, signupUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token && location.state && location.state.from) {
      navigate(location.state.from);
    } else if (token) {
      navigate("/");
    }
  }, [token]);

  const singupHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const userCred = Object.fromEntries(formData.entries());
    console.log(userCred);
    signupUser(userCred);
  };

  return (
    <div className="login">
      <form ref={formRef} className="login-form" onSubmit={singupHandler}>
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

        <button disabled={authLoading} type="submit">
          {authLoading ? "Loading..." : "Submit"}
        </button>
        <div className="login-extra">
          Already have an account{" "}
          <span
            disabled={authLoading}
            onClick={() => setSignUpOrLogin("login")}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};
