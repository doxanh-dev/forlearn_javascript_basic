import React from 'react';

class Person extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          mode: undefined  
        };
    }

    componentWillMount(){
        //hàm đc gọi trước gọi hàm render để hiển thị
        let modeValue;
        if(this.props.age > 60){
            modeValue = "old";
        }
        else if(this.props.age < 18){
            modeValue = "young";
        }
        else {
            modeValue = "middle";
        }
        this.setState({
            mode: modeValue,
        });
    }

    render(){
        return (
            <div className={"person person-"+ this.state.mode}>
                Name: <b>{this.props.name}</b> - Age: <i>{this.props.age}</i>
            </div>
        );
    }
}

export default Person;