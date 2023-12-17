import { useAuth } from "../Context/AuthContext";
import "./Navbar.css";
export const Navbar = () => {
  const { token, user, logoutUser } = useAuth();
  return (
    <div className="navbar">
      <h4>Data Visualizer</h4>
      <div className="navbar-user">
        <p>Welcome, {user.fullname}</p>
        <div className="vr"></div>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </div>
  );
};
