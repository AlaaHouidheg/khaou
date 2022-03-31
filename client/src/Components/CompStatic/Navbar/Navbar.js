import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="header">
        <img src="logo.PNG" alt="logo" className="logo" />
        <ul className=" nav-links">
          <li className="center">
            <Link to="/">Home</Link>
          </li>
          <li className="upward">
            <Link to="/about">About Us</Link>
          </li>
          <li className="forward">
            <Link to="/cours">Courses</Link>
          </li>
          <li className="forward">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="log">
          <Link to="/sign">
            <button className="login slide">
              <span>Sign In</span>
            </button>
          </Link>
          <Link to="/sign">
            {" "}
            <button className="register">
              {" "}
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
