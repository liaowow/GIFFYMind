import React, { Component } from 'react';
import GifChooser from './GifChooser';
import Chance from './Chance'

export default class Game extends Component {
    
    render() {
        console.log(this.props.newBoard)
        return (
            <div>
                <h3>New Game</h3>
                <div className="main_panel">
                    < Chance />
                    < Chance />
                    < Chance />
                    < Chance />
                    < Chance />
                    < Chance />
                    < Chance />
                    < Chance />
                    < Chance />
                    < Chance />
                    < GifChooser />
                </div>
            </div>
        )
    }
}
