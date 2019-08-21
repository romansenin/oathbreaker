import React, { Component } from "react";
import { Link } from "react-router-dom";
import Quote from "../../components/Quote";
import Story from "../../components/Story";

import "./Landing.css";

import { ReactComponent as Logo } from "../../images/rating.svg";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="landing-wrapper">
        <div className="container">
          <h1 className="title">OathBreaker</h1>
          <h2 className="sub-title">Choose Your Allegiance</h2>
          <p className="summary">
            Journey into the world of Vidas in the age of the OathBreaker.
            Engage in battles full of dynamic heroes and compelling stories.
          </p>
          <Link to="/login" className="btn btn--border">
            Join The Fight <span />
          </Link>
        </div>
        <div>
          {/* Logo is an actual React component */}
          <Logo className="rating" />
        </div>

        <Quote />
        <Story />
      </div>
    );
  }
}
