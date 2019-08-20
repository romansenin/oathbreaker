import React, { Component } from "react";
import "./style.css";

import Alliance from "../../components/Alliance";

export default class ChooseAllegiance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="choose-allegiance">
        <Alliance type={0} />
        <Alliance type={1} />
      </div>
    );
  }
}
