import React, { Component } from "react";
import "./Login.css";

import Heading from "../../components/Heading";
import Form from "../../components/Form";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login-wrapper">
        <section className="fog">
          <div className="absolute-bg" />
          <div className="fog-container" />
          <div className="fog-img fog-img-first" />
          <div className="fog-img fog-img-first" />
        </section>
        <div className="login-container">
          <Heading />
          <Form />
        </div>
      </div>
    );
  }
}
