import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Employee Finder
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Homepage
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/Employee"
              className={window.location.pathname === "/Employee" ? "nav-link active" : "nav-link"}
            >
             Search Employees
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
