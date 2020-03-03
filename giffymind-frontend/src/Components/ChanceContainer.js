import React, { Component } from 'react';
import Chance from './Chance';

export default class ChanceContainer extends Component {
  render() {
    return (
    <div className="main_panel">
        < Chance correctAns={this.props.correctAns}/>
        < Chance correctAns={this.props.correctAns}/>
        < Chance correctAns={this.props.correctAns}/>
        < Chance correctAns={this.props.correctAns}/>
        < Chance correctAns={this.props.correctAns}/>
        < Chance correctAns={this.props.correctAns}/>
        < Chance correctAns={this.props.correctAns}/>
        < Chance correctAns={this.props.correctAns}/>
        < Chance correctAns={this.props.correctAns}/>
        < Chance correctAns={this.props.correctAns}/>
    </div>
    );
  }
}
