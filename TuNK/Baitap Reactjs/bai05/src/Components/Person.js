import React from 'react';

class Person extends React.Component{
    render(){
        return(
            <div className="detail">
                <ul>
                    <li>Name: <b>{this.props.name}</b></li>
                    <li>Address: <b>{this.props.address}</b></li>
                    <li>Age: <b>{this.props.age}</b></li>
                </ul>
            </div>
        );
    }
}

export default Person;