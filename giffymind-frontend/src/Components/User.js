import React, { Component } from 'react';
import Game from './Game';
import Menu from './Menu'
import Results from './Results';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default class User extends Component {

    state = {
        username: "",
        game: [],
        clicked: false
    }

    handleChange = e => {
        let userInput = e.target.value

        this.setState ({ username: userInput})
    }


    handleClick = () => {
        console.log(this.state.username)
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({username: this.state.username})
        })
        .then(r => r.json())
        .then(resp => {this.setState({
            username: resp.username.username,
            game: resp.game
        })})

        this.setState({ 
            clicked:!this.state.clicked
        })
    }

    render() {

        if(this.state.clicked){
            return(
                <div>
                    <h1>GIFFYMind</h1>
                    < Menu />
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={7}>< Game newBoard={this.state.game}/></Col>
                        <Col sm={4}>< Results /></Col>
                    </Row>
                </div>
            )
        }



        return (
            <div>
                <h1>GIFFYMind</h1>
                <h3>Enter your username</h3>
                <input type="text" placeholder="Please Enter Username" value={this.state.username} onChange={this.handleChange}/>
                <Button type="submit" onClick={this.handleClick}>Enter</Button>
            </div>
        )
    }
}
