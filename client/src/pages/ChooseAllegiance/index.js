import React, { Component } from "react";

export default class ChooseAllegiance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const content = (this.props.user) ? <h1>ChooseAllegiance</h1> : "You need to login";
    return content;
  }
}
