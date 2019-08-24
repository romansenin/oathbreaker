import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";

import Alliance from "../../components/Alliance";

export default class ChooseAllegiance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.user ? (
      <div className="choose-allegiance">
        <Alliance type={0} setAllegiance={this.props.setAllegiance}/>
        <Alliance type={1} setAllegiance={this.props.setAllegiance}/>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}
