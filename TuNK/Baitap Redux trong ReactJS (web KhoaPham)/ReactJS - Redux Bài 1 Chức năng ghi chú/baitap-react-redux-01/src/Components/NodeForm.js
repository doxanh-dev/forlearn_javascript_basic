import React, { Component } from 'react';

class NodeForm extends Component {
    constructor(props) {
        super(props);
        this.InputRef = React.createRef();
    }

    submitForm(event) {
        event.preventDefault();
        var textInput = this.InputRef.current;
        
        if (textInput.value === '') {
            alert("Moi nhap ghi chu !!!");
            textInput.focus();
            return;
        }
        else {
            this.props.handleAdd(textInput.value);
            this.InputRef.current.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm.bind(this)}>
                    <input type="text" placeholder="Nhập ghi chú" ref={this.InputRef}></input><br />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
export default NodeForm;