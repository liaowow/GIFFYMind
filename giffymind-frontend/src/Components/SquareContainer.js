import React, { Component } from 'react';
import Square from './Square';
import Row from 'react-bootstrap/Row'

export default class SquareContainer extends Component {
  render() {



    return (
      <Row>  
          <Square />
          <Square />
          <Square />
          <Square />
      </Row>
    );
  }
}
