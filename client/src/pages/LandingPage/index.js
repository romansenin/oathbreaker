import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

import { ReactComponent as Logo } from "../../images/rating.svg";
import { ReactComponent as Git } from "../../images/git.svg";
import { ReactComponent as Insta } from "../../images/insta.svg";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="landing-wrapper">
          <div className="container land-container">
            <div className="light">
              <div className="flare one">
                <div className="flare two">
                  <div className="flare five" />
                  <div className="flare six" />
                  <div className="flare three">
                    <div className="flare four" />
                  </div>
                </div>
              </div>
            </div>
            <Link to="/">
              <span className="title">OathBreaker</span>
            </Link>
            <h2 className="sub-title">Choose Your Allegiance</h2>
            <p className="summary">
              Journey into the world of Vidas in the age of the OathBreaker.
              Engage in battles full of dynamic heroes and compelling stories.
            </p>
            <Link to="/allegiance" className="btn btn--border">
              Join The Fight <span />
            </Link>
            <div className="container">
              <div className="row mt-5 d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                  {/* Git is an actual React component */}
                  <a href="https://github.com/romansenin/group-project-3">
                    <Git className="git" />
                  </a>
                  {/* Insta is an actual React component */}
                  <a href="https://www.instagram.com/oathbreakergame/">
                    <Insta className="insta" />
                  </a>
                </div>

                <div>
                  {/* Logo is an actual React component */}{" "}
                  <Logo className="rating" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
