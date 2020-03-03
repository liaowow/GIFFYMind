import React, { Component } from 'react';
import Hint from './Hint';
import Button from 'react-bootstrap/Button'

export default class Checker extends Component {
    render() {
        return (
            <div>
                {/* <Button className="score" size="lg" variant="info" onClick={this.handleCheck}>Check</Button> */}
                < Hint />
            </div>
        )
    }
}
