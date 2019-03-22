import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deletePost} from '../actions/PostActions';
import {editPost} from '../actions/PostActions';

class AllPostContainer extends Component {
    // constructor(props){
    //     super(props);
    //     this.clickDel = this.clickDel.bind(this);
    // }

    clickEdit(id){
        this.props.editData(id);
    }

    clickDel(id){
        this.props.deleteData(id);
    }

    dataRender() {
        let list = this.props.data.listData.map(
            (x, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{x.fullname}</td>
                        <td>{x.address}</td>
                        <td>{x.content}</td>
                        <td>
                            <button onClick={() => {this.clickEdit(index)}}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => {this.clickDel(index)}}>Delete</button>
                        </td>
                    </tr>
                )
            }
        );
        return list;
    }

    render() {
        return (
            <div className="listSV">
                <h3>Danh sách sinh viên</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th width="50">ID</th>
                            <th width="150">Fullname</th>
                            <th width="180">Address</th>
                            <th width="400">Content</th>
                            <th colSpan="2" width="">Action</th>
                        </tr>
                        {this.dataRender().length > 0 ? this.dataRender() : <tr><td colSpan="6" className="color-nodata">Không có dữ liệu Sinh viên trong danh sách !</td></tr>}
                    </thead>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteData(id) {
            dispatch(deletePost(id));
        },
        editData(id){
            dispatch(editPost(id));
        }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(AllPostContainer);