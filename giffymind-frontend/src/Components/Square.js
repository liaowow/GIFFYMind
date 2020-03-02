import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default class Square extends Component {
    render() {
        return (
            <div className="squares">
                 <Row>
                    <Col className="square">1 of 4</Col>
                    <Col className="square">2 of 4</Col>
                    <Col className="square">3 of 4</Col>
                    <Col className="square">4 of 4</Col>
                </Row>
            </div>
        )
    }
}
