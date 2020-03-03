import React, { Component } from 'react';
import Hint from './Hint';
import Button from 'react-bootstrap/Button'

export default class Checker extends Component {

    state = {
        clicked: false
    }

    handleCheck = () => {
        
        this.setState({
            clicked: !this.state.clicked
        })

    }

    render() {
        if (this.state.clicked) {
            return (
                <Hint correctAns={this.props.correctAns}/>
            )
        }

        return (
            <div>
                <Button className="score" size="lg" variant="info" onClick={this.handleCheck}>Check</Button>
            </div>
        )
    }
}
