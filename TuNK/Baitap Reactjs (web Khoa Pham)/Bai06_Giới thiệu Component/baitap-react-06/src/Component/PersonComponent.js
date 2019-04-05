import React, {Component} from 'react';

class PersonComponent extends Component {
    render(){
        return(
            <ul>
                <li><b>Name:</b> {this.props.name}</li>
                <li><b>Age:</b> {this.props.age}</li>
                <li><b>Address:</b> {this.props.address}</li>
            </ul>
        )
    }
}
export default PersonComponent;