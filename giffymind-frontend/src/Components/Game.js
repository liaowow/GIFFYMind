import React, { Component } from 'react';
import Chance from './Chance'

export default class Game extends Component {
    
    render() {
        console.log(this.props.newBoard)
        return (
            <div>
                <h6 className="funfontsm">New Game</h6>
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
                </div>
            </div>
        )
    }
}
