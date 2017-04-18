import React from 'react';
import '../App.css';

class TweetForm extends React.Component {
    constructor() {
        super();
        this.createTweet = this.createTweet.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {
            textContent: ''
        }
    }

    createTweet(evt) {
        evt.preventDefault();
        const tweetContent = this.tweetText.value;
        const tweet = {
            name: 'Samir Medjdoub',
            handle: '@meanjsfr',
            text: tweetContent,
            date: new Date()
        }
        this.props.addTweet(tweet);
        this.tweetText.value = '';
        console.log(tweet);
    }

    handleTextChange(evt) {
        this.setState({ textContent: evt.target.value });
    }

    render() {
        return (
            <form onSubmit={(e) => this.createTweet(e)}>
                <textarea ref={(input) => { this.tweetText = input}} 
                    placeholder="votre tweet"
                    className="full-width"
                    onChange={this.handleTextChange}
                    ></textarea><br/>
                <button type="submit" className="btn btn-xs btn-primary" disabled={!this.state.textContent}>poster</button>                
            </form>
        );
    }
}

export default TweetForm;