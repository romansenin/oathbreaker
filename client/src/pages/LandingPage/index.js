import React, { Component } from "react";
import { Link } from "react-router-dom";
import Quote from "../../components/Quote";
import Story from "../../components/Story";

import "./Landing.css";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="landing-wrapper">
        <div className="title">
          <h1>OathBreaker</h1>
          <Link to="/login" className="btn btn--border">
            Join The Fight <span />
          </Link>
        </div>
        <Quote />
        <Story />
      </div>
    );
  }
}
