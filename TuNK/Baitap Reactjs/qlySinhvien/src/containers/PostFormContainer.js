import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/PostActions';
import { updatePost } from '../actions/PostActions';

class PostFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount() {
        this.setState({ data: this.props.data });
    }

    submitForm(event) {
        event.preventDefault();
        var data = this.state.data;

        //check validate
        if (data.fullname === null || data.fullname === "") {
            alert("Ten khong duoc de trong!");
            return;
        }
        else if (data.address === null || data.address === "") {
            alert("Dia chi khong duoc de trong!");
            return;
        }
        else {
            //thuc hien them moi hoac update
            if (data.id === null || data.id === "") {
                this.props.createData(data);
            }
            else {
                this.props.updateData(data.id, data);
            }
        }
    }

    onChangeText(event) {
        var newData = this.state.data;
        var target = event.target;
        var name = target.name;
        newData[name] = target.value;
        this.setState({
            data: newData
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.setState({ data: nextProps.data });
        }
    }

    render() {
        return (
            <div className="form-post">
                <h3>Thêm mới sinh viên</h3>
                <form>
                    <div>
                        <div><label className="title">Fullname</label></div>
                        <div className="result-style">
                            <input type="text"
                                name="fullname"
                                value={this.state.data.fullname}
                                onChange={this.onChangeText}>
                            </input>
                        </div>
                    </div>
                    <div>
                        <div><label className="title">Address</label></div>
                        <div className="result-style">
                            <input type="text"
                                name="address"
                                value={this.state.data.address}
                                onChange={this.onChangeText}>
                            </input>
                        </div>
                    </div>
                    <div>
                        <div><label className="title">Content</label></div>
                        <div className="result-style">
                            <textarea rows="5"
                                cols="10"
                                name="content"
                                value={this.state.data.content}
                                onChange={this.onChangeText}>
                            </textarea>
                        </div>
                    </div>
                    <input type="hidden" name="id" value={this.state.data.id} ></input>
                    <button type="submit" onClick={this.submitForm}>{this.state.data.id === "" ? "Submit" : "Update"} </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: Object.assign({}, state.data)
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);