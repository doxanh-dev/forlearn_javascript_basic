import React, { Component } from 'react';

class ComButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton(){
        this.setState({
            count: parseInt(this.state.count) + 1,
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.clickButton}>Xin chao {this.state.count}</button>
            </div>
        )
    }
}
export default ComButton;