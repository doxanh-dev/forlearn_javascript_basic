import React, { Component } from 'react';

class OnClickComponent extends Component {
    render() {
        return (
            <div>
                <p>Vidu ve bắt sự kiện - demo {this.props.value}</p>
                <p><i>{this.props.children}</i></p>
                <p>
                    <button onClick={() => this.props.OnClickButton(this.props.children)}>Click</button>
                </p>
            </div>
        )
    }
}
export default OnClickComponent;