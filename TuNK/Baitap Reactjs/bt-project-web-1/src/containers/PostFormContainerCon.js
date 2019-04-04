import React, { Component } from 'react';
import { connect } from 'react-redux';
import { convertArrToString } from '../utils/Convert';
import { addPost } from '../actions/PostActions';
import { updatePost } from '../actions/PostActions';

class PostFormContainerCon extends Component {
    constructor(props) {
        super(props);
        this.backConfirm = this.backConfirm.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.gotoPageSuccess = this.gotoPageSuccess.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        var data = this.props.data;
        if (data.id === "") {
            this.props.createData(data);
        }
        else {
            this.props.updateData(data.id, data);
        }
        this.gotoPageSuccess();
    }

    gotoPageSuccess() {
        this.props.history.replace({
            pathname: "/postformOk"
        });
    }

    backConfirm(event) {
        event.preventDefault();
        this.props.history.replace({
            pathname: "/postform"
        });
    }

    render() {
        return (
            <div className="post-form-confirm">
                <h1>Xác nhận thông tin sinh viên đăng ký</h1>
                <div className="content">
                    <div className="uk-width-1-3 uk-margin-auto uk-text-left">
                        <div className="items">
                            <label className="ui grey label">Fullname</label>
                            <span>{this.props.data.fullname}</span>
                        </div>
                        <div className="items">
                            <label className="ui grey label">Address</label>
                            <span>{this.props.data.address}</span>
                        </div>
                        <div className="items">
                            <label className="ui grey label">Class</label>
                            <span>{this.props.data.class}</span>
                        </div>
                        <div className="items">
                            <label className="ui grey label">Gender</label>
                            <span>{this.props.data.gender}</span>
                        </div>
                        <div className="items">
                            <label className="ui grey label">Hobby</label>
                            <span>{this.props.data.hiddenHobby}</span>
                        </div>
                        <div className="items">
                            <label className="ui grey label">Notes</label>
                            <span>{this.props.data.note}</span>
                        </div>
                        <div className="uk-text-left" id="btn-confirm">
                            <button type="submit" className="ui telegram button" onClick={this.submitForm}>
                                {this.props.data.id === "" ? <i className="plus icon"></i> : <i className="sync icon"></i>}
                                &nbsp; {this.props.data.id === "" ? "Thêm mới" : "Cập nhật"}
                            </button>
                            <button type="submit" id="btn-back" className="ui whatsapp button" onClick={this.backConfirm}>
                                <i className="reply icon"></i>
                                &nbsp; Trở về
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    state.data.hiddenHobby = convertArrToString(state.data.hobby)
    return {
        data: state.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createData(data) {
            dispatch(addPost(data));
        },
        updateData(id, data) {
            dispatch(updatePost(id, data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainerCon);