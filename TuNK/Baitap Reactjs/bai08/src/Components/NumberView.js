import React, { Component } from 'react';

class NumberView extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentNumber: 1
        };
        this.clickNextValue = this.clickNextValue.bind(this);
    }

    clickNextValue(){
        this.setState({
            currentNumber: this.state.currentNumber + 1
        }) ;
    }

    shouldComponentUpdate(props,nextState){
        setTimeout(() => {
            //console.log(this.state.currentNumber)
            console.log(nextState.currentNumber)
        },100);
        return nextState.currentNumber % 2 === 1;
    }

    render(){
        return(
            <div className="group3">
                <button onClick={this.clickNextValue}>Next Value</button>
                <p>Current Value: {this.state.currentNumber}</p>
            </div>
        );
    }
}

export default NumberView;