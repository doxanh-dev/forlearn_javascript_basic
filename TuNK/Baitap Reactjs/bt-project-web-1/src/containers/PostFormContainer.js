import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobby: [
                { value: "1", label: "Music" },
                { value: "2", label: "Sport" },
                { value: "3", label: "Picnic" },
                { value: "4", label: "Other" },
            ]
        }
        this.returnHome = this.returnHome.bind(this);
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
                        <input type="checkbox" name="hobby" tabIndex="0" className="hidden" />
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
                                <input type="text" name="fullname" placeholder="Fullname"></input>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label className="label-style">Address</label>
                                <input type="text" name="address" placeholder="Address"></input>
                            </div>
                        </div>
                        <div className="three fields">
                            <div className="field">
                                <label className="label-style">Class</label>
                                <select name="class">
                                    <option value="">---</option>
                                    <option value="CNTT1">CNTT1</option>
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
                                            <input type="radio" name="gender" tabIndex="0" className="hidden" value="male" />
                                            <label>Male</label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input type="radio" name="gender" tabIndex="0" className="hidden" value="female" />
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
                            <textarea rows="5" name="note"></textarea>
                        </div>
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
    console.log("state: "+ JSON.stringify(state))
    return {
        data: Object.assign({}, state.data)
    }

};

export default connect(mapStateToProps, null)(PostFormContainer);