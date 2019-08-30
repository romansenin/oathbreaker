import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./style.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        OathBreaker
      </Link>

      <div className="button-wrapper">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item hide-desktop">
            <NavLink
              exact
              to="/allegiance"
              className="nav-link"
              activeClassName="active"
            >
              Choose Allegiance
            </NavLink>
          </li>

          <li className="nav-item hide-desktop">
            <NavLink
              exact
              to="/auth/logout"
              className="nav-link"
              activeClassName="active"
            >
              Logout
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.user.displayName}
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item" to="/allegiance">
                Choose Allegiance
              </Link>
              <div className="dropdown-divider" />

              <a className="dropdown-item" href="/auth/logout">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
