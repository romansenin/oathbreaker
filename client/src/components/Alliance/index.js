import React, { Component } from "react";
import "./style.css";

class Alliance extends Component {
  render() {
    return (
      <div id={"alliance" + this.props.type} className="alliance">
        {!this.props.type ? (
          <div>
            <h1>The Triumvate</h1>
          </div>
        ) : (
          <div>
            <h1>The Vjarr</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Alliance;
