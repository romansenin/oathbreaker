import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import "./button.css";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battleRedirect: false
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.props.clicked(this.props.id);
    this.setState({ battleRedirect: true });
  }

  render() {
    if (this.state.battleRedirect) return <Redirect to="/battle" />;
    return (
      <div className="character-select-wrap">
        <img
          className="character-select-image"
          alt={this.props.name}
          src={this.props.image}
        />

        <div className="character-select-description">
          <button
            exact
            to="/battle"
            className="bttn-stretch bttn-lg bttn-primary"
            activeClassName="active"
            onClick={this.handleSelect}
          >
            FIGHT!
          </button>
          <br />
          <span className="character-select-name">{this.props.name}</span>
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
