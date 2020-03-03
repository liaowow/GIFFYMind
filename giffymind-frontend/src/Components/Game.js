import React, { Component } from 'react';
import ChanceContainer from './ChanceContainer'

export default class Game extends Component {
    
    render() {
        console.log(this.props.newBoard)
        return (
            <div>
                <h6 className="funfontsm">New Game</h6>
                <ChanceContainer correctAns={this.props.newBoard}/>
            </div>
        )
    }
}
