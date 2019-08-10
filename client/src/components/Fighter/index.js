import React, {Component} from 'react';
import './style.css';

class Character extends Component{
    state = {
        ids: [1, 2, 3, 4]
    };

    render(){
        return (
            <div className="char-box">
                <p>Name: {this.props.name}</p>
                <div className="img-container">
                    <img
                        alt={this.props.name}
                        src={this.props.image}
                    />
                </div>
                <p>Health: {this.props.health}</p>
                <p>Attack: {this.props.attack}</p>
                <p>Defense: {this.props.defense}</p>
                <p>Agility: {this.props.agility}</p>
                {this.props.handleAttack ? <button onClick={() => this.props.handleAttack(this.props.id, this.props.target)}>Attack</button> : ""}
                
            </div>
        );
    }
}

export default Character;