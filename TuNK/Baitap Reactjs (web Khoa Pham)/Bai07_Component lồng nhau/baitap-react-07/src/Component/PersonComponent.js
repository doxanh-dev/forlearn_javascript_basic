import React, { Component } from 'react';
import Info from '../Component/Info';

class PersonComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><b>Name:</b> {this.props.name}</li>
                    <li><b>Age:</b> {this.props.age}</li>
                    <li><b>Address:</b> {this.props.address}</li>
                </ul>
                <Info info={this.props.name}></Info>
            </div>
        )
    }
}
export default PersonComponent;