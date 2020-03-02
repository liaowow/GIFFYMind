import React, { Component } from 'react';
import Hint from './Hint';
import Button from 'react-bootstrap/Button'

export default class Score extends Component {
    render() {
        return (
            <div className="score">
                <Button onClick={this.handleCheck}>Check</Button>
                < Hint />
                < Hint />
                < Hint />
                < Hint />
            </div>
        )
    }
}
