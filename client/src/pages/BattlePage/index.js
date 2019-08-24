import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//Development source for fighters
import fighters from "../../characters";
import Fighter from "../../components/Fighter";
import MessageBox from "../../components/MessageBox";
import Navbar from "../../components/Navbar";
import "./style.css";

export default class BattlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ["Fight!!!"],
      characterRedirect: false,
      player: { ...fighters[this.props.player - 1] },
      enemy: { ...fighters[this.props.enemy - 1] },
      gameOver: false
    };
    this.handleAttack = this.handleAttack.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

  // Handles interaction between fighters
  handleAttack() {
    const player = this.state.player;
    const enemy = this.state.enemy;

    // check for dodge for enemy
    const enemyDodge = Math.floor(Math.random() * 100) + 1;
    const enemyDamage =
      enemyDodge < enemy.agility // evaded?
        ? player.attack - 0.9 * player.attack // subtract off 90% of player's attack power
        : player.attack;

    enemy.health -= enemyDamage;

    if (enemy.health < 0) {
      enemy.health = 0;
    }

    // Check for dodge for player
    const playerDodge = Math.floor(Math.random() * 100) + 1;
    const playerDamage =
      playerDodge < player.agility // evaded?
        ? enemy.attack - 0.9 * enemy.attack // subtract off 90% of enemy's's attack power
        : enemy.attack;

    player.health -= playerDamage;

    if (player.health < 0) {
      player.health = 0;
    }

    const log1 =
      enemyDodge < enemy.agility
        ? `${enemy.name} evaded!`
        : `${enemy.name} took ${enemyDamage} damage!`;
    const log2 =
      playerDodge < player.agility
        ? `${player.name} evaded!`
        : `${player.name} took ${playerDamage} damage!`;

    this.setState(
      () => ({ messages: [log1, log2], player, enemy }),
      () => {
        if (!player.health && !enemy.health) this.gameOver("It's a Tie!");
        else if (!player.health) this.gameOver(enemy.name + " won!");
        else if (!enemy.health) this.gameOver(player.name + " won!");
      }
    );
  }

  gameOver(message) {
    this.setState(
      {
        messages: [message],
        gameOver: true
      },
      () =>
        setTimeout(() => {
          this.setState({ messages: ["Next Round in 3..."] }, () => {
            setTimeout(
              () =>
                this.setState({ messages: ["Next Round in 2..."] }, () =>
                  setTimeout(
                    () =>
                      this.setState({ messages: ["Next Round in 1..."] }, () =>
                        setTimeout(
                          () => this.setState({ characterRedirect: true }),
                          1000
                        )
                      ),
                    1000
                  )
                ),
              1000
            );
          });
        }, 2000)
    );
  }

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    if (this.props.player === undefined || this.state.characterRedirect)
      return <Redirect to="/character" />;
    return (
      <div className="battle-page">
        <Navbar user={this.props.user} view="battle" />
        <h1>BattlePage</h1>
        <div id="battle-bg" className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <Fighter
                name={this.state.player.name}
                key={this.state.player.id}
                id={this.state.player.id}
                image={this.state.player.image}
                health={this.state.player.health}
                maxHealth={this.state.player.maxHealth}
                attack={this.state.player.attack}
                defense={this.state.player.defense}
                agility={this.state.player.agility}
                handleAttack={this.handleAttack}
                gameOver={this.state.gameOver}
              />
            </div>
            <div className="col-md-6 text-center">
              <Fighter
                name={this.state.enemy.name}
                key={this.state.enemy.id}
                id={this.state.enemy.id}
                image={this.state.enemy.image}
                health={this.state.enemy.health}
                maxHealth={this.state.enemy.maxHealth}
                attack={this.state.enemy.attack}
                defense={this.state.enemy.defense}
                agility={this.state.enemy.agility}
              />
            </div>
          </div>
          <MessageBox messages={this.state.messages} />
        </div>
      </div>
    );
  }
}
