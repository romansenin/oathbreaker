import React, { Component } from "react";
import "./style.css";

class Character extends Component {
  render() {
    const newHealth = (this.props.health / this.props.maxHealth) * 100;

    return (
      <div className="char-box">
        <h1 className="character-battle-name">{this.props.name}</h1>
        <hr />
        <div className="progress">
          <div
            id="healthbar"
            className="progress-bar progress-bar-striped progress-bar-animated bg-info"
            role="progressbar"
            style={{ width: `${newHealth}%` }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <hr />
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        {this.props.handleAttack && !this.props.gameOver ? (
          <img
            className="attack-bttn"
            src="https://opengameart.org/sites/default/files/Attack.png"
            alt="attack button"
            onClick={() =>
              this.props.handleAttack(this.props.id, this.props.target)
            }
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Character;
