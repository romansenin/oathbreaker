import React from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Character from "../../components/Character";
import characters from "../../characters";

import "./style.css";

const CharacterSelection = props => {
  if (!props.user) return <Redirect to="/login" />;
  if (props.allegiance === undefined) return <Redirect to="/allegiance" />;
  return (
    <>
      <Navbar user={props.user} view="character" />
      <div className="character-selection">
        <h1>Choose Character</h1>
        <ul>
          {characters.map((value, index) => {
            return value.faction === props.allegiance ? (
              <Character
                key={index}
                id={value.id}
                name={value.name}
                image={value.image}
                health={value.health}
                attack={value.attack}
                defense={value.defense}
                agility={value.agility}
                clicked={props.clicked}
              />
            ) : (
              ""
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CharacterSelection;
