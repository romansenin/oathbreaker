import React, { Component } from 'react';
import './style.css';

class Character extends Component {
    state = {
        ids: [1, 2, 3, 4]
    };

    render() {
        return (
            <div className="character-select-wrap">
                <img className="character-select-image"
                    alt={this.props.name}
                    src={this.props.image}
                />
                <h2 className="character-select-name">
                    {this.props.name}</h2>
                
                <div className="character-select-description">
                    <p>Stats:</p>
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