import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Character from "../../components/Character";
import characters from "../../characters";

import "./style.css";

export default class CharacterSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    if (this.props.allegiance === undefined)
      return <Redirect to="/allegiance" />;
    return (
      <div className="character-selection">
        <h1>Character</h1>
        <ul>
          {characters.map((value, index) => {
            return value.faction === this.props.allegiance ? (
              <Character
                key={index}
                id={value.id}
                name={value.name}
                image={value.image}
                health={value.health}
                attack={value.attack}
                defense={value.defense}
                agility={value.agility}
                clicked={this.props.clicked}
              />
            ) : (
              ""
            );
          })}
        </ul>
        {/* <ul>
          {characters.map((value, index) => {
            return value.faction !== this.props.allegiance ? (
              <Character
                key={index}
                id={value.id}
                name={value.name}
                image={value.image}
                health={value.health}
                attack={value.attack}
                defense={value.defense}
                agility={value.agility}
                clicked={this.props.clicked}
              />
            ) : (
              ""
            );
          })}
        </ul> */}
      </div>
    );
  }
}
