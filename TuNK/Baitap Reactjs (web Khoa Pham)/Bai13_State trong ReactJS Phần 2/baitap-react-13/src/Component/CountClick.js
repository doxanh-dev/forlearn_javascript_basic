import React, { Component } from 'react';

class CountClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickButton: this.props.countclick
        }
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {
        var item = parseInt(this.state.clickButton) + 1;
        this.setState({
            clickButton: item
        });
    }

    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <p>Số lượt click: <span>{this.state.clickButton}</span></p>
                <button onClick={this.clickButton}>Click button</button>
            </div>
        )
    }
}
export default CountClick;