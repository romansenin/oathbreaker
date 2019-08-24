import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

class Character extends Component {
  render() {
    return (
      <div className="character-select-wrap">
        <img
          className="character-select-image"
          alt={this.props.name}
          src={this.props.image}
          onClick={() => {
            this.props.clicked(this.props.id);
          }}
        />

        <div className="character-select-description">
          <NavLink
            exact
            to="/battle"
            className="choose-char-nav-link-btn"
            activeClassName="active"
          >
            <span>Choose {this.props.name}</span>
          </NavLink>
          <br />
          <span>Stats:</span>
          <br />
          <span>Health: {this.props.health}</span>
          <br />
          <span>Attack: {this.props.attack}</span>
          <br />
          <span>Defense: {this.props.defense}</span>
          <br />
          <span>Agility: {this.props.agility}</span>
        </div>
      </div>
    );
  }
}

export default Character;
