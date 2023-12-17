import { useState } from "react";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";
import "./Auth.css";
export default function Auth() {
  const [singUpOrLogin, setSignUpOrLogin] = useState("login");
  return (
    <div className="auth">
      {singUpOrLogin === "login" ? (
        <Login setSignUpOrLogin={setSignUpOrLogin} />
      ) : (
        <Signup setSignUpOrLogin={setSignUpOrLogin} />
      )}
    </div>
  );
}
