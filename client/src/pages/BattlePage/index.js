import React, { Component } from "react";
//Development source for characters
import characters from '../../characters.json';
import Fighter from '../../components/Fighter';
import './style.css';

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

    for(let i = 0; i < newCharacters.length; i++){
      if(newCharacters[i].id === atkId){
        atk = newCharacters[i];
      } else if(newCharacters[i].id === defId){
        def = newCharacters[i];
      }
    }

    if(atk.health > 0 && def.health > 0){
      for(let i = 0; i < newCharacters.length; i++){
        if(newCharacters[i].id === defId){
          console.log(`${atk.name} attacks ${def.name}`);
          console.log(newCharacters[i]);
          newCharacters[i].health -= (atk.attack - def.defense);
          if(newCharacters[i].health < 0){
            newCharacters[i].health = 0;
          }
        }
        if(newCharacters[i].id === atkId){
          console.log(`${def.name} counterattacks ${atk.name}`);
          newCharacters[i].health -= (def.attack - atk.defense);
          if(newCharacters[i].health < 0){
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
  }

  render() {
    return (
      <>
        <h1>BattlePage</h1>
        <div id="battle-bg" className="container">
          <div className="row">
            <div className="col-md-6 text-center">
            <Fighter name={characters[0].name}
              key={characters[0].id}
              id={characters[0].id}
              image={characters[0].image}
              health={characters[0].health}
              attack={characters[0].attack}
              defense={characters[0].defense}
              agility={characters[0].agility}
              target={characters[1].id}
              handleAttack={this.handleAttack}/>
            </div>
            <div className="col-md-6 text-center">
            <Fighter name={characters[1].name}
              key={characters[1].id}
              id={characters[1].id}
              image={characters[1].image}
              health={characters[1].health}
              attack={characters[1].attack}
              defense={characters[1].defense}
              agility={characters[1].agility}
              target={characters[0].id}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}