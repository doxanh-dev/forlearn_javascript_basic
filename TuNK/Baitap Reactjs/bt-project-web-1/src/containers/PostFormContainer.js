import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearData } from '../actions/PostActions';
import { confirmData } from '../actions/PostActions';

class PostFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            hobby: [
                { value: "1", label: "Music" },
                { value: "2", label: "Sport" },
                { value: "3", label: "Picnic" },
                { value: "4", label: "Other" },
            ]
        }
        this.returnHome = this.returnHome.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount() {
        this.setState({ data: this.props.data });
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

    onChangeCheckbox(event, value) {
        var index = this.state.data.hobby.indexOf(value);
        const data = this.state.data;
        if (index > -1) {
            let newArr = data.hobby.filter(e => e !== value);
            data[event.target.name] = newArr;
        }
        else {
            let newArr = data.hobby.concat(value);
            data[event.target.name] = newArr;
        }
        this.setState({ data: data });
    }

    submitForm(event) {
        event.preventDefault();
        var data = this.state.data;
        if (data.fullname === null || data.fullname === "") {
            alert("Ten khong duoc de trong!");
            document.getElementsByName("fullname")[0].focus();
            return;
        }
        else if (data.address === null || data.address === "") {
            alert("Dia chi khong duoc de trong!");
            document.getElementsByName("address")[0].focus();
            return;
        }
        else if (data.class === null || data.class === "") {
            alert("Lop phai được chọn !");
            document.getElementsByName("class")[0].focus();
            return;
        }
        else if (data.gender === null || data.gender === "") {
            alert("Giới tính phai được chọn !");
            return;
        }
        else if (data.hobby.length === 0) {
            alert("Sở thích phai được chọn !");
            return;
        }
        else {
            //chuyển sang màn hình confirm
            this.props.confirmData(data);
            this.props.history.replace({
                pathname: "/postformcon"
            });
        }
    }

    returnHome(event) {
        event.preventDefault();
        this.props.clearData();
        this.props.history.replace({
            pathname: "/"
        });
    }

    componentDidMount() {
        window.initCheckbox();
        window.initRadioCheckbox();
    }

    checkboxRender() {
        const multiCheckbox = this.state.hobby.map(object => {
            return (
                <label key={object.value}>
                    <input type="checkbox"
                        className="uk-checkbox"
                        name="hobby"
                        value={object.value}
                        onChange={event => this.onChangeCheckbox(event, object.value)}
                        checked={this.state.data.hobby.indexOf(object.value) > -1 ? true : false} />
                    {object.label}
                </label>
            )
        });
        return multiCheckbox;
    }

    render() {
        return (
            <div className="post-form">
                <h1>{this.state.data.id === "" ? "Đăng ký lớp thông tin sinh viên" : "Cập nhật thông tin sinh viên"}</h1>
                <div className="content">
                    <form className="ui form uk-width-1-2 uk-margin-auto">
                        <div className="two fields">
                            <div className="field">
                                <label className="label-style">Fullname</label>
                                <input type="text"
                                    name="fullname"
                                    placeholder="Fullname"
                                    value={this.state.data.fullname}
                                    onChange={this.onChangeText} ></input>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label className="label-style">Address</label>
                                <input type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={this.state.data.address}
                                    onChange={this.onChangeText} ></input>
                            </div>
                        </div>
                        <div className="three fields">
                            <div className="field">
                                <label className="label-style">Class</label>
                                <select name="class" onChange={this.onChangeText} value={this.state.data.class}>
                                    <option value="">---</option>
                                    <option value="CNTT1">CNTT1</option>
                                    <option value="CNTT2">CNTT2</option>
                                    <option value="CNTT3">CNTT3</option>
                                    <option value="CNTT4">CNTT4</option>
                                </select>
                            </div>
                        </div>
                        <div className="grouped fields">
                            <div className="field">
                                <label className="label-style">Gender</label>
                                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label>
                                        <input className="uk-radio"
                                            type="radio"
                                            name="gender"
                                            onChange={this.onChangeText}
                                            checked={this.state.data.gender === "male" ? true : false}
                                            value="male" />
                                        Male
                                    </label>
                                    <label>
                                        <input className="uk-radio"
                                            type="radio"
                                            name="gender"
                                            onChange={this.onChangeText}
                                            checked={this.state.data.gender === "female" ? true : false}
                                            value="female" />
                                        Female
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="field">
                            <label className="label-style">Hobby</label>
                            <div className="inline fields">
                                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    {this.checkboxRender()}
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label-style">Notes</label>
                            <textarea rows="5"
                                name="note"
                                value={this.state.data.note}
                                onChange={this.onChangeText} ></textarea>
                        </div>
                        <input type="hidden" name="id" value={this.state.data.id} ></input>
                        <div className="uk-text-left">
                            <button type="submit" className="ui telegram button" onClick={this.submitForm}>
                                <i className="check icon"></i>
                                &nbsp; Xác nhận
                            </button>
                            <button type="submit" id="btn-back" className="ui whatsapp button" onClick={this.returnHome}>
                                <i className="reply icon"></i>
                                &nbsp; Trở về
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearData() {
            dispatch(clearData());
        },
        confirmData(data) {
            dispatch(confirmData(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);