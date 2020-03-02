import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Rules from './Rules'

export default class Menu extends Component {

    render() {
        return (
            <div className="menu">
                <ButtonToolbar>
                    <Rules/>
                    <Button variant="light" size="lg">Log Out</Button>
                </ButtonToolbar>
            </div>
        )
    }
}
