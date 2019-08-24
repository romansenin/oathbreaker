import React, { Component } from 'react';
import './style.css';

class MessageBox extends Component {
    state = {
        ids: [1, 2, 3, 4]
    };

    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-md-7 m-box my-5"><span className="align-middle">{this.props.message}</span></div>
            </div>
        );
    }
}

export default MessageBox;