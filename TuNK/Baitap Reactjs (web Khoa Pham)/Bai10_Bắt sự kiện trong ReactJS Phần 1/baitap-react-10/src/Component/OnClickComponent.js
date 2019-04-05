import React, {Component} from 'react';

class OnClickComponent extends Component {
    constructor(props){
        super(props);
        this.OnClickButton = this.OnClickButton.bind(this);
    }

    OnClickButton(){
        alert(this.props.children)
    }

    render(){
        return (
            <div>
                <p>Vidu ve bắt sự kiện - demo {this.props.value}</p>
                <p><i>{this.props.children}</i></p>
                <p>
                    <button onClick={this.OnClickButton}>Click</button>
                </p>
            </div>
        )
    }
}
export default OnClickComponent;