import React, { Component } from 'react';
import Checker from './Checker';
import SquareContainer from './SquareContainer';

export default class Chance extends Component {



    render() {
        return (
            <div className="row">
                <div className="column left">
                    <SquareContainer />
                </div>
                <div className="column right">
                    <Checker /> 
                </div>
            </div>

        )
    }
}
