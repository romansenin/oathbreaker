import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Game </Link>

      <div className="button-wrapper">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/login" className="nav-link" activeClassName="active">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/signup" className="nav-link" activeClassName="active">Sign Up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/chooseAllegiance" className="nav-link" activeClassName="active">Choose Allegiance</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/selectCharacter" className="nav-link" activeClassName="active">Choose Character</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/battle" className="nav-link" activeClassName="active">Battle</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
