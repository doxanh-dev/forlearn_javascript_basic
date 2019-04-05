import React, {Component} from 'react';

class Info extends Component {
    render(){
        return(
            <i>Day la thong tin cua <b>{this.props.info}</b></i>
        )
    }
}
export default Info;