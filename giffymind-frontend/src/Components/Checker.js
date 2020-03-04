import React, { Component } from 'react';
import Hint from './Hint';
import Button from 'react-bootstrap/Button'

export default class Checker extends Component {

    state = {
        clicked: false,
        hintArr: []

    }

    handleCheck = () => {
        // console.log(this.props)
        let correctArr = this.props.correctAns
        let userArr = this.props.completeArr
        let hintArr = [...this.state.hintArr]

        for(let i = 0; i < userArr.length; i++ ){
            if(correctArr.includes(userArr[i])){
                hintArr = [...hintArr, `yellow-${i}`]
            }else {
                hintArr = [...hintArr,`white-${i}`]
            } 

            for( let j = 0; j < correctArr.length; j++){
                if(correctArr[j] === userArr[i] && i === j){
                    hintArr = [...hintArr,`green-${i}`]
                    let filteredArr =  hintArr.filter(element=> Number(element[element.length -1]) === i)
                    filteredArr.shift()
                    hintArr.splice(i,2,filteredArr[0])
                } 
            }
           
            
        }
        
        this.setState({
            clicked: !this.state.clicked,
            hintArr: hintArr
        })

    }

    render() {
        console.log(this.state.hintArr)
        if (this.state.clicked) {
            return (
                <Hint hintArr={this.state.hintArr}/>
            )
        }

        return (
            <div>
                <Button className="score" size="lg" variant="info" onClick={this.handleCheck}>Check</Button>
            </div>
        )
    }
}
