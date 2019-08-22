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