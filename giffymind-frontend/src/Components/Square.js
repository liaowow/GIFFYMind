import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Popover from 'react-bootstrap/Popover'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class Square extends Component {

    state = {
        clicked: false,
        gifs: [],
        filled: ""
    }

    handleSquareClick = (e) => {

        this.setState({
            clicked: !this.state.clicked
        })

        //fetch all gifs, save them into state
        fetch("http://localhost:3000/gifs")
        .then(r => r.json())
        .then(gifsData => {
            this.setState({
                gifs: gifsData.map(gif => gif.image_url)
            })
        })

    }

    gifChooser = () => {
        return (
            <Popover id="popover-contained" title="Popover bottom">
                {this.state.gifs.map(gifUrl => <img key={gifUrl} className="small_square" src={gifUrl} alt="animated gif" onClick={() => this.handleGifClick(gifUrl)} />)}
            </Popover>
        )
    }

    handleGifClick = (gifUrl) => {
        this.setState({
            filled: gifUrl
        })
    }
    
    render() {
        // console.log(this.state.filled)
        if (this.state.filled !== "") {
            return (
                <Col squareIsFilled={this.state.filled}><img className="square" src={this.state.filled} alt="selected gif"/></Col>
            )
        }

        return (
            <Col className="square" onClick={this.handleSquareClick}>{this.state.clicked ? this.gifChooser() : null}</Col>
        )
    }
}
