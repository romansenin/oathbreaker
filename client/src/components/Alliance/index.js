import React, { Component } from "react";
import "./style.css";

class Alliance extends Component {
  render() {
    return (
      <div className="alliance-container">
        <section className="fog-wrapper">
          <div className="fog-container" />
          <div
            id={"alliance" + this.props.type}
            className={this.props.type ? "fog-alliance" : ""}
          >
            <div className={!this.props.type ? "rain" : ""}>
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
          </div>
          <div className="fog-img alliance-fog-1" />
          <div className="fog-img alliance-fog-2" />
        </section>
      </div>
    );
  }
}

export default Alliance;
