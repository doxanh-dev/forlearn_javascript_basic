import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPost} from '../actions/PostActions';

class PostFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            //editing: null
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount(){
        this.setState({ data: this.props.data });
    }

    submitForm(event) {
        event.preventDefault();
        var data = this.state.data;
        //var editing = this.state.editing;
        this.props.createData(data);
        //console.log("edit: "+ editing)
        // if(editing === false){
        //     this.props.createData(data);
        // }
        // else{
        //     console.log("dataEdit: "+ JSON.stringify(data))
        //     console.log("thuc hien edit")
        // }
        
        
        this.setState({
            data: {
                id:"",
                fullname:"",
                address:"",
                content:""
            }
        });
    }

    onChangeText(event) {
        var newData = this.state.data;
        var target = event.target;
        var name = target.name;
        newData[name] = target.value;
        this.setState({
            data: newData,
            //editing: !this.state.editing
        });
        //console.log("newData: "+ JSON.stringify(this.state))
    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps: "+ JSON.stringify(nextProps.data))
        console.log("props: "+ JSON.stringify(this.props.data))
        if(nextProps.data!==this.props.data){
          this.setState({data: nextProps.data });
        }
      }

    render() {
       //console.log("vvvv: "+ JSON.stringify(this.state))
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
                    <button type="submit" onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    //console.log("state: "+ JSON.stringify(state))
    return {
        data: Object.assign({}, state.data),
        //editing: state.editing
    }

};

const mapDispatchToProps = dispatch => {
    return {
      createData(data) {
        dispatch(addPost(data));
      }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);