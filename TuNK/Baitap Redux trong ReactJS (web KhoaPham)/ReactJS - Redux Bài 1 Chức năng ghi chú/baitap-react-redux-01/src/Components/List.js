import React, { Component } from 'react';
import Note from './Note';
import NodeForm from './NodeForm'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: ['Android', 'iOS', 'NodeJs'],
            showFlag: false
        }
        this.onClickAdd = this.onClickAdd.bind(this);
    }

    removeNote(index) {
        this.state.array.splice(index, 1);
        this.setState({ array: this.state.array });
    }

    addNote(node) {
        this.state.array.push(node);
        this.setState({ array: this.state.array, showFlag: !this.state.showFlag });
    }

    onClickAdd() {
        this.setState({ showFlag: !this.state.showFlag });
    }

    noteRender() {
        const item = this.state.array.map((item, index) => {
            return (
                <Note index={index} removeNote={this.removeNote.bind(this)} key={index}>{item}</Note>
            )
        });
        return item;
    }

    render() {
        return (
            <div className="content">
                {this.state.showFlag === false ?
                    <div id="btn_add"><button onClick={this.onClickAdd}>+</button></div> :
                    <NodeForm handleAdd={this.addNote.bind(this)}></NodeForm>}
                {this.noteRender().length > 0 ? this.noteRender() : <p className="thongbao">Không có ghi chú nào !</p>}
            </div>
        )
    }
}
export default List;