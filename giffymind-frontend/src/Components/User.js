import React, { Component } from 'react';
import Game from './Game';
import Menu from './Menu'
import Button from 'react-bootstrap/Button';

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


    handleUserClick = () => {
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
                <div className="centercontainer">
                    <h1 className="funfont">GIFFYMind</h1>
                    < Menu handleUserClick={this.handleUserClick}/>
                    <br />
                    <Game newBoard={this.state.game} handleUserClick={this.handleUserClick}/>
                </div>
            )
        }



        return (
            <div className="centercontainer">
                <h1 className="funfont">GIFFYMind</h1>
                <h3>Enter your username:</h3>
                <br />
                <input type="text" placeholder="" value={this.state.username} onChange={this.handleChange}/>
                <br />
                <br />
                <Button variant="dark" type="submit" onClick={this.handleUserClick}>Go!</Button>
            </div>
        )
    }
}
