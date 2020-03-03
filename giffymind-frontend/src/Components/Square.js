import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Popover from 'react-bootstrap/Popover'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class Square extends Component {

    state = {
        clicked: false
    }

    handleSquareClick = (e) => {
        this.setState({
            clicked: !this.state.clicked
        })
        
    }

    gifChooser = () => {

            return (
                <Popover id="popover-contained" title="Popover bottom">
                    <img src="https://media.giphy.com/media/11CD1W0njRgJFK/giphy.gif" />       
                </Popover>
            )

    }

    
    render() {


        return (
            <Col className="square" onClick={this.handleSquareClick}>{this.state.clicked ? this.gifChooser() : null}</Col>
        )
    }
}
