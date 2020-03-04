import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Rules from './Rules'
import Results from './Results';

export default class Menu extends Component {

    render() {
        return (
            <div className="menu">
                <ButtonToolbar>
                    <Rules/>
                    <Results/>
                    <Button onClick={this.props.handleUserClick} variant="dark" size="lg">Log Out</Button>
                </ButtonToolbar>
                <br />
            </div>
        )
    }
}
