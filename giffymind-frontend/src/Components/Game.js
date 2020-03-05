import React, { Component } from 'react';
import ChanceContainer from './ChanceContainer'
import Timer from './Timer'
import Button from 'react-bootstrap/Button';

export default class Game extends Component {

    state = {
        attempts: 0,
        won: 0
    }
    
    addAttempts = () => {
        this.setState({
            attempts: +this.state.attempts + 1
        })
    }


    handleOutcome = () => {
        // resetting the game
        this.setState({
            attempts: 0
        })

        this.props.handleUserClick()
    }

    handleWinning = () => {
        this.setState({
            won: 1
        })
    }

    render() {
        if (this.state.attempts >= 5) {

            return(
                <div>
                    <div id="dialog">
                      <div className="outcome"> <h1>You Lost! </h1> </div>
                      <Button onClick={this.handleOutcome}>Try Again!</Button>
                    </div>
                    <Timer user={this.props.user}  numOfAttempts={this.state.attempts}/>
                    <ChanceContainer handleWinning={this.handleWinning} correctAns={this.props.newBoard} handleUserClick={this.props.handleUserClick} handleTimerStop={this.handleTimerStop} addAttempts={this.addAttempts}/>
                </div>
            )
          }

        return (
            <div>
                <h6 className="funfontsm">New Game</h6>
                <Timer won={this.state.won} numOfAttempts={this.state.attempts}/>
                <ChanceContainer handleWinning={this.handleWinning} 
                                 correctAns={this.props.newBoard} 
                                 handleUserClick={this.props.handleUserClick} 
                                 handleTimerStop={this.handleTimerStop} 
                                 addAttempts={this.addAttempts}
                                 handleOutcome={this.handleOutcome}/>
            </div>
        )
    }
}
