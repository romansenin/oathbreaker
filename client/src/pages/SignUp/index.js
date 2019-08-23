import React, { Component } from "react";
import "./style.css";

import Heading from "../../components/Heading";
import Form from "../../components/Form";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "signup"
    };
  }

  render() {
    return (
      <div className="signup">
        <Heading />
        <Form view={this.state.view} />
      </div>
    );
  }
}
