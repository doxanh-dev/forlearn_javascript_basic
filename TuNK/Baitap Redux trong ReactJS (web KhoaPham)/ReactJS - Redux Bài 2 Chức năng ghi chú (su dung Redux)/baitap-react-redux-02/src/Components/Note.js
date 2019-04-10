import React, {Component} from 'react';

class Note extends Component {
    render(){
        return (
            <div className="item-note">
                <p>{this.props.children}</p>
                <button onClick={()=>this.props.removeNote(this.props.index)}>Delete</button>
            </div>
        )
    }
}
export default Note;