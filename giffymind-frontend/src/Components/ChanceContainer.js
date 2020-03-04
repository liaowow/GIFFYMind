import React, { Component } from 'react';
import Chance from './Chance';
import Button from 'react-bootstrap/Button';

export default class ChanceContainer extends Component {

  state = {
    attempts: 0
  }

  addAttempts = () => {
    this.setState({
      attempts: +this.state.attempts + 1
    })
  }

  handleOutcome = () => {
    this.setState({
      attempts: 0
    })

    this.props.handleUserClick()
  }

  render() {
    console.log(this.state.attempts)
    if(this.state.attempts >= 5){
      return(
        <div id="dialog">
            <div>
                <div className="winning"> <h1>You Lost! </h1> </div>
                <Button onClick={this.handleOutcome}>Try Again!</Button>
            </div>
        </div>
      )
    }
    return (
    <div className="main_panel">
        < Chance correctAns={this.props.correctAns} addAttempts={this.addAttempts} handleOutcome={this.handleOutcome}/>
        < Chance correctAns={this.props.correctAns} addAttempts={this.addAttempts} handleOutcome={this.handleOutcome}/>
        < Chance correctAns={this.props.correctAns} addAttempts={this.addAttempts} handleOutcome={this.handleOutcome}/>
        < Chance correctAns={this.props.correctAns} addAttempts={this.addAttempts} handleOutcome={this.handleOutcome}/>
        < Chance correctAns={this.props.correctAns} addAttempts={this.addAttempts} handleOutcome={this.handleOutcome}/>
    </div>
    );
  }
}
