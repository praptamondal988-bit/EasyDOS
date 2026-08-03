import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      <div
        className="navbar-logo"
        onClick={() => navigate("/")}
      >
        <div className="logo-box">E</div>

        <div>
          <h2>EasyDOS</h2>
          <span>Learn. Practice. Grow.</span>
        </div>
      </div>

      <div className="navbar-menu">

        <button onClick={() => navigate("/")}>
          🏠 Home
        </button>

        <button onClick={() => navigate("/class/9")}>
          📘 Class 9
        </button>

        <button onClick={() => navigate("/class/10")}>
          📗 Class 10
        </button>

      </div>

      <div className="navbar-actions">

        <button className="search-btn">
          🔍
        </button>

        <button className="login-btn">
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;