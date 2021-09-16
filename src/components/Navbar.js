import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Alex News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact={true} className="nav-link" to="/">
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tech">
                  Tech
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sports">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/finance">
                  Finance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/politics">
                  Politics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertaiment">
                  entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/travel">
                  Travel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/science">
                  Science
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
