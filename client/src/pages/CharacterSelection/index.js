import React, { Component } from "react";

import Character from "../../components/Character";

import CharacterStats from "../../components/CharacterStats";

import characters from "../../characters.json";

import './style.css';


export default class CharacterSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCharacters() {
    return (
      <ul>
        {characters.map((value, index) => {
          return (
            <Character
              key={index}
              name={value.name}
              image={value.image}
              health={value.health}
              attack={value.attack}
              defense={value.defense}
              agility={value.agility}

            />
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="character-selection">
        <h1>Characters</h1>
        {this.renderCharacters()}
        <div className="character-stats">
          <CharacterStats/>
        </div>
      </div>
    );
  }
}
