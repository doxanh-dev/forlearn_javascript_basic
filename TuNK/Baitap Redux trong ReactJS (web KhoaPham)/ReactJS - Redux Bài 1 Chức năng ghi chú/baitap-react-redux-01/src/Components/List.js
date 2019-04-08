import React, { Component } from 'react';
import Note from './Note';
import NodeForm from './NodeForm'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: ['Android', 'iOS', 'NodeJs']
        }
    }

    removeNote(index) {
        this.state.array.splice(index, 1);
        this.setState(this.state);
    }

    addNote(node){
        this.state.array.push(node);
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <NodeForm handleAdd={this.addNote.bind(this)}></NodeForm>
                {this.state.array.map((item, index) => {
                    return (
                        <Note index={index} removeNote={this.removeNote.bind(this)} key={index}>{item}</Note>
                    )
                })}
            </div>
        )
    }
}
export default List;