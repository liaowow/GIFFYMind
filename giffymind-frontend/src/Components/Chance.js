import React, { Component } from 'react';
import Square from './Square';
import Score from './Score';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default class Chance extends Component {
    render() {
        return (
            <Row>
                <Col sm={8}> < Square /> </Col>
                <Col sm={4}> <Score/> </Col>
            </Row>
        )
    }
}
