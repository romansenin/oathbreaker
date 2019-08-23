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

                <div className="character-select-description">
                    <NavLink exact to="/battle" className="choose-char-nav-link-btn" activeClassName="active">
                        <span>Choose {this.props.name}</span></NavLink><br>
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