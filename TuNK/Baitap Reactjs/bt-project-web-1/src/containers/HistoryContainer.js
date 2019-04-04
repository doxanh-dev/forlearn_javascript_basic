import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/PostActions';
import { editPost } from '../actions/PostActions';

class HistoryContainer extends Component {
    constructor(props) {
        super(props);
        this.returnHome = this.returnHome.bind(this);
    }

    returnHome(event) {
        event.preventDefault();
        this.props.history.replace({
            pathname: "/"
        });
    }

    clickDel(id) {
        this.props.deleteData(id);
    }

    clickEdit(id) {
        this.props.editData(id);
        this.props.history.push({
            pathname: `/postform`
        });
    }

    datarender() {
        let item = this.props.data.listData.map(
            (x, index) => {
                return (
                    <tr key={index}>
                        <td className="uk-text-center">{index + 1}</td>
                        <td>{x.fullname}</td>
                        <td>{x.address}</td>
                        <td>{x.class}</td>
                        <td>{x.gender}</td>
                        <td>{x.hiddenHobby}</td>
                        <td>{x.note}</td>
                        <td className="uk-text-center">
                            <button className="ui blue button" onClick={() => { this.clickEdit(index) }}><i className="edit icon"></i></button>
                            <button className="ui red button" onClick={() => { this.clickDel(index) }}><i className="trash icon"></i></button>
                        </td>
                    </tr>
                )
            });
        return item;
    }

    render() {
        return (
            <div className="history">
                <h1>Danh sách thông tin sinh viên đăng ký lớp</h1>
                <div className="content">
                    <table className="ui selectable celled table">
                        <thead>
                            <tr>
                                <th className="center aligned" width="40">ID</th>
                                <th className="center aligned" width="100">Fullname</th>
                                <th className="center aligned" width="100">Address</th>
                                <th className="center aligned" width="80">Class</th>
                                <th className="center aligned" width="100">Gender</th>
                                <th className="center aligned" width="200">Hobby</th>
                                <th className="center aligned">Notes</th>
                                <th className="center aligned" width="150">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.datarender().length > 0 ? this.datarender() : <tr><td colSpan="8" className="color-nodata">Không có dữ liệu Sinh viên trong danh sách !</td></tr>}
                        </tbody>
                    </table>
                    <div>
                        <button type="submit" id="btn-back" className="ui whatsapp button" onClick={this.returnHome}>
                            <i className="reply icon"></i>
                            &nbsp; Trở về
                        </button>
                    </div>
                </div>
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
        editData(id) {
            dispatch(editPost(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);