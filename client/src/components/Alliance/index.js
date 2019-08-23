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
                <div className="container">
                  <div className="overlay">
                    <div className="text">
                      <h1 id="one">The Triumvate</h1>
                      The Triumvate was a peaceful union of three lesser clans,
                      represented by the element of water.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="container">
                  <div className="overlay">
                    <div className="text">
                      <h1 id="two">The Vjarr</h1>
                      The Vjarr Clan. A powerful and ruthless warring clan
                      represented by the element of fire.
                    </div>
                  </div>
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
