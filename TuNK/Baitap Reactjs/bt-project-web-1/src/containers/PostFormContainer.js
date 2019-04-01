import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        console.log("data: " + JSON.stringify(this.state.data))
    }

    onChangeCheckbox(event, value) {
        console.log("hello")
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

    returnHome(event) {
        event.preventDefault();
        this.props.history.replace({
            pathname: "/"
        });
    }

    componentDidMount() {
        window.initCheckbox();
    }

    checkboxRender() {
        const multiCheckbox = this.state.hobby.map(object => {
            return (
                <div className="field" key={object.value}>
                    <div className="ui checkbox">
                        <input type="checkbox"
                            name="hobby"
                            tabIndex="0"
                            className="hidden"
                            value={object.value}
                            onChange={event => this.onChangeCheckbox(event, object.value)}
                            checked={this.state.data.hobby.indexOf(object.value) > -1 ? true : false} />
                        <label>{object.label}</label>
                    </div>
                </div>
            )
        });
        return multiCheckbox;
    }

    render() {
        return (
            <div className="post-form">
                <h1>Đăng ký lớp thông tin sinh viên</h1>
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
                                    <option value="CNTT1" >CNTT1</option>
                                    <option value="CNTT2">CNTT2</option>
                                    <option value="CNTT3">CNTT3</option>
                                    <option value="CNTT4">CNTT4</option>
                                </select>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className=" field">
                                <label className="label-style">Gender</label>
                                <div className="inline fields">
                                    <div className="field">
                                        <div className="ui radio checkbox ">
                                            <input type="radio"
                                                name="gender"
                                                value="male"
                                                onChange={this.onChangeText}
                                                checked={this.state.data.gender === "male" ? true : false} />
                                            <label>Male</label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input type="radio"
                                                name="gender"
                                                onChange={this.onChangeText}
                                                value="female"
                                                checked={this.state.data.gender === "female" ? true : false} />
                                            <label>Female</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label-style">Hobby</label>
                            <div className="inline fields">
                                {this.checkboxRender()}
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
                            <button type="submit" className="ui telegram button">
                                <i className="plus icon"></i>
                                Thêm mới
                            </button>
                            <button type="submit" id="btn-back" className="ui whatsapp button" onClick={this.returnHome}>
                                <i className="reply icon"></i>
                                Trở về
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
        data: Object.assign({}, state.data)
    }

};

export default connect(mapStateToProps, null)(PostFormContainer);