import React, { Component } from 'react';

class PropsComponent extends Component {
    render() {
        return (
            <div>Đây là vidu demo về Props trên link của <i><u>{this.props.ten}</u></i></div>
        )
    }
}
export default PropsComponent;