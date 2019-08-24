import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './style.css';
import './button.css';

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

    render() {
        return (
            <div className="character-select-wrap">
                <img className="character-select-image"
                    alt={this.props.name}
                    src={this.props.image}
                    onClick={
                        () => {
                            this.props.clicked(this.props.id);
                        }
                    }
                />

                <div className="character-select-description">
                    <NavLink exact to="/battle" className="bttn-stretch bttn-lg bttn-primary" activeClassName="active">
                        FIGHT!</NavLink><br>
                    </br>
                    <span className="character-select-name">{this.props.name}</span><br>
                    </br>
                    <span>Stats:</span><br>
                    </br>
                    <span>Health: {this.props.health}</span><br>
                    </br>
                    <span>Attack: {this.props.attack}</span><br>
                    </br>
                    <span>Defense: {this.props.defense}</span><br>
                    </br>
                    <span>Agility: {this.props.agility}</span>
                </div>
            </div>
        );
    }
}

export default Character;
