import React, { Component } from 'react';
import Square from './Square';
import Row from 'react-bootstrap/Row'

export default class SquareContainer extends Component {

    state = {
        allSquaresFilled: []
    }

    squareIsFilled = (squareUrl) => {
        console.log(squareUrl)
        this.setState({
            allSquaresFilled: [...this.state.allSquaresFilled, squareUrl]
        })

    }

    render() {
        // console.log(this.state.allSquaresFilled)
        return (
        <Row>  
            <Square key="first_square" squareIsFilled={this.squareIsFilled}/>
            <Square key="second_square" squareIsFilled={this.squareIsFilled}/>
            <Square key="third_square" squareIsFilled={this.squareIsFilled}/>
            <Square key="fourth_square" squareIsFilled={this.squareIsFilled}/>
        </Row>
        );
    }
}
