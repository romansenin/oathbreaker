import React, { Component } from 'react';
import './style.css';

class Character extends Component {
    state = {
        ids: [1, 2, 3, 4]
    };

    // var divStyle = {
    //     color: 'white',
    //     backgroundImage: 'url(' + imgUrl + ')',
    //     WebkitTransition: 'all', // note the capital 'W' here
    //     msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    //   };

    // ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode);

    render() {
        var newHealth = (this.props.health / this.props.maxHealth) * 100;

        return (
            <div className="char-box">
                <h1 className="character-battle-name">{this.props.name}</h1>
                <hr />
                <div className="progress">
                    <div id="healthbar" className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ "width": `${newHealth}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <hr />
                <div className="img-container">
                    <img
                        alt={this.props.name}
                        src={this.props.image}
                    />
                </div>
                {this.props.handleAttack ? <img className="attack-bttn" src="https://opengameart.org/sites/default/files/Attack.png" onClick={() => this.props.handleAttack(this.props.id, this.props.target)}></img>: ""}

            </div>
        );
    }
}

export default Character;