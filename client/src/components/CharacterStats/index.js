import React, { Component } from 'react';

class CharacterStats extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        return (
            <div>
                <div
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                >
                    Hover Me
        </div>
                {
                    this.state.isHovering &&
                    <div>
                        <div className="character-char-box">
                            <p>{this.props.name}</p>
                            <h3>Stats:</h3>
                            <p>Health: {this.props.health}</p>
                            <p>Attack: {this.props.attack}</p>
                            <p>Defense: {this.props.defense}</p>
                            <p>Agility: {this.props.agility}</p>
                        </div>
                    </div>

                }
            </div>
        );
    }
}

export default CharacterStats;