import React, { Component } from 'react';

class PostFormContainer extends Component {
    constructor(props){
        super(props);
        this.returnHome = this.returnHome.bind(this);
    }
    returnHome(event){
        event.preventDefault();
        this.props.history.replace({
            pathname: "/"
        });
    }

    render() {
        return (
            <div className="post-form">
                <h1>Đăng ký lớp thông tin sinh viên</h1>
                <div className="content">
                    <form className="ui form uk-width-1-2 uk-margin-auto">
                        <div className="two fields">
                            <div className="field">
                                <label>Fullname</label>
                                <input type="text" name="fullname" placeholder="Fullname"></input>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>Address</label>
                                <input type="text" name="address" placeholder="Address"></input>
                            </div>
                        </div>
                        <div className="three fields">
                            <div className="field">
                                <label>Class</label>
                                <select>
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
                                <label>Gender</label>
                                <div className="inline fields">
                                    <div className="field">
                                        <div className="ui radio checkbox">
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
                            <label>Notes</label>
                            <textarea rows="5"></textarea>
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
export default PostFormContainer;