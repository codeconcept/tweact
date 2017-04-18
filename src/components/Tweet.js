import React from 'react';
import '../App.css';

class Tweet extends React.Component {
    render() {
        return (
            <div className='vertical-spacer'>
                <div><b>{this.props.name}</b> {this.props.handle}</div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default Tweet;