import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import NodeForm from './NodeForm';
import { addPost } from '../actions/PostActions';
import { removeNote } from '../actions/PostActions';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }

    removeNote(index) {
        this.props.removeItem(index);
    }

    addNote() {
        this.props.addPostData(this.state.noteItem);
        this.setState({ showFlag: !this.state.showFlag });
    }

    onClickAdd() {
        this.setState({ showFlag: !this.state.showFlag });
    }

    onChangeText(event) {
        var target = event.target;
        this.setState({ noteItem: target.value });
    }

    noteRender() {
        const item = this.props.data.list.map((item, index) => {
            return (
                <Note index={index} removeNote={this.removeNote.bind(this)} key={index}>{item}</Note>
            )
        });
        return item;
    }

    componentWillMount() {
        this.setState(this.props.data);
    }

    render() {
        return (
            <div className="content">
                {this.state.showFlag === false ?
                    <div id="btn_add"><button onClick={this.onClickAdd}>+</button></div> :
                    <NodeForm handleAdd={this.addNote.bind(this)} onChangeText={this.onChangeText.bind(this)} {...this.props}></NodeForm>}
                {this.noteRender().length > 0 ? this.noteRender() : <p className="thongbao">Không có ghi chú nào !</p>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPostData(data) {
            dispatch(addPost(data))
        },
        removeItem(id) {
            dispatch(removeNote(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);