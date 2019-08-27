import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Character from "../../components/Character";
import characters from "../../characters";

import "./style.css";

export default class CharacterSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {characters};
  }

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    if (this.props.allegiance === undefined)
      return <Redirect to="/allegiance" />;
    console.log(this.props.allegiance);
    console.log(this.state.characters);
    return (
      <div className="character-selection">
        <Navbar user={this.props.user} view="character"/>
        <h1>Choose Character</h1>
        <ul>
          {this.state.characters.map((value, index) => {
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
      </div>
    );
  }
}
