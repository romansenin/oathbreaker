import React, { Component } from "react";
//Development source for characters
import characters from "../../characters";
import Fighter from "../../components/Fighter";
import "./style.css";

export default class BattlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters,
      state: 0
    };
  }

  //Handle counter attack from defender
  //Add evasion mechanic
  handleAttack = (atkId, defId) => {
    var newCharacters = this.state.characters;
    var atk, def;

    for (let i = 0; i < newCharacters.length; i++) {
      if (newCharacters[i].id === atkId) {
        atk = newCharacters[i];
      } else if (newCharacters[i].id === defId) {
        def = newCharacters[i];
      }
    }

    if (atk.health > 0 && def.health > 0) {
      for (let i = 0; i < newCharacters.length; i++) {
        if (newCharacters[i].id === defId) {
          console.log(`${atk.name} attacks ${def.name}`);
          console.log(newCharacters[i]);
          newCharacters[i].health -= atk.attack - def.defense;
          if (newCharacters[i].health < 0) {
            newCharacters[i].health = 0;
          }
        }
        if (newCharacters[i].id === atkId) {
          console.log(`${def.name} counterattacks ${atk.name}`);
          newCharacters[i].health -= def.attack - atk.defense;
          if (newCharacters[i].health < 0) {
            newCharacters[i].health = 0;
          }
        }
      }
    } else {
      alert("Battle over!");
      window.location.pathname = "/selectcharacter";
    }

    this.setState({
      characters: newCharacters
    });
  };

  render() {
    return (
      <div className="battle-page">
        <h1>BattlePage</h1>
        <div id="battle-bg" className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <Fighter
                name={characters[this.props.player - 1].name}
                key={characters[this.props.player - 1].id}
                id={characters[this.props.player - 1].id}
                image={characters[this.props.player - 1].image}
                health={characters[this.props.player - 1].health}
                maxHealth={characters[this.props.player - 1].maxHealth}
                attack={characters[this.props.player - 1].attack}
                defense={characters[this.props.player - 1].defense}
                agility={characters[this.props.player - 1].agility}
                target={characters[this.props.enemy - 1].id}
                handleAttack={this.handleAttack}
              />
            </div>
            <div className="col-md-6 text-center">
              <Fighter
                name={characters[this.props.enemy - 1].name}
                key={characters[this.props.enemy - 1].id}
                id={characters[this.props.enemy - 1].id}
                image={characters[this.props.enemy - 1].image}
                health={characters[this.props.enemy - 1].health}
                maxHealth={characters[this.props.enemy - 1].maxHealth}
                attack={characters[this.props.enemy - 1].attack}
                defense={characters[this.props.enemy - 1].defense}
                agility={characters[this.props.enemy - 1].agility}
                target={characters[this.props.player - 1].id}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
