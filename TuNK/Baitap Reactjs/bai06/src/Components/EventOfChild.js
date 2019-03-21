import React from 'react';

class EventOfChild extends React.Component {
    render() {
        return (
            <div className="eventOfChild">
                <h4>Child</h4>
                <button type="button" onClick={this.props.ClickButtonOfChild}>Click</button>
            </div>
        );
    }
}
export default EventOfChild;