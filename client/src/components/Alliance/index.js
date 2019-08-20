import React, { Component } from "react";
import "./style.css";

class Alliance extends Component {
  render() {
    return (
      <div id={"alliance" + this.props.type} className="alliance">
        {!this.props.type ? (
          <div>
            <h1>First Alliance</h1>
          </div>
        ) : (
          <div>
            <h1>Second Alliance</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Alliance;
