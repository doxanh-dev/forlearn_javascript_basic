import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import NodeForm from './NodeForm'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            showFlag: false,
            noteItem:""
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
        const item = this.props.data.list.map((item, index) => {
            return (
                <Note index={index} removeNote={this.removeNote.bind(this)} key={index}>{item}</Note>
            )
        });
        return item;
    }

    componentWillMount(){
        this.setState({noteItem: this.props.noteItem});
    }

    render() {
        return (
            <div className="content">
                {this.state.showFlag === false ?
                    <div id="btn_add"><button onClick={this.onClickAdd}>+</button></div> :
                    <NodeForm handleAdd={this.addNote.bind(this)} {...this.props}></NodeForm>}
                {this.noteRender().length > 0 ? this.noteRender() : <p className="thongbao">Không có ghi chú nào !</p>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("dddd: "+ JSON.stringify(state))
    return {
        data: state
    }
}

export default connect(mapStateToProps, null)(List);