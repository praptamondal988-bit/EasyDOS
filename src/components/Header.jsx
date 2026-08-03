import "./Header.css";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  User,
  Menu
} from "lucide-react";

import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">

      <div className="logo-area">

        <Link to="/" className="logo-link">

          <img src={logo} alt="EasyDOS" />

          <div className="logo-text">

            <h2>EasyDOS</h2>

            <span>Bangladesh's Smart Learning Platform</span>

          </div>

        </Link>

      </div>

      <nav className="nav-links">

        <Link to="/">Home</Link>

        <a href="#classes">Classes</a>

        <a href="#subjects">Subjects</a>

        <a href="#courses">Courses</a>

        <a href="#quiz">Quiz</a>

      </nav>

      <div className="header-actions">

        <button className="icon-btn">
          <Search size={20} />
        </button>

        <button className="icon-btn">
          <Bell size={20} />
        </button>

        <button className="icon-btn">
          <User size={20} />
        </button>

        <button className="menu-btn">
          <Menu size={22} />
        </button>

      </div>

    </header>
  );
}

export default Header;