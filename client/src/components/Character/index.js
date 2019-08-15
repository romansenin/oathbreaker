import React, { Component } from 'react';
import './style.css';

class Character extends Component {
    state = {
        ids: [1, 2, 3, 4]
    };

    render() {
        return (
            <div className="character-img-container">
                <img
                    alt={this.props.name}
                    src={this.props.image}
                />
                <div className="character-char-box">
                    <p>{this.props.name}</p>
                    <h3>Stats:</h3>
                    <p>Health: {this.props.health}</p>
                    <p>Attack: {this.props.attack}</p>
                    <p>Defense: {this.props.defense}</p>
                    <p>Agility: {this.props.agility}</p>
                </div>
            </div>
        );
    }
}

export default Character;