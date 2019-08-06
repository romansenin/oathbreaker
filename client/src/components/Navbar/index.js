import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Google Books</Link>

      <div className="button-wrapper">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Search</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/saved" className="nav-link" activeClassName="active">Saved</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
