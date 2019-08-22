import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
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
                    onClick={
                        () => {
                            this.props.clicked(this.props.id);
                        }
                    }
                />
                <h2 className="character-select-name">
                    {this.props.name}</h2>
                
                <div className="character-select-description">
                    <NavLink exact to="/battle" className="nav-link" activeClassName="active">Battle</NavLink>
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