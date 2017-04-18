import React from 'react';
import '../App.css';

class TweetForm extends React.Component {
    constructor() {
        super();
        this.createTweet = this.createTweet.bind(this);
    }

    createTweet(evt) {
        evt.preventDefault();
        const tweetContent = this.tweetText.value;
        const tweet = {
            author: '@meanjsfr',
            text: tweetContent,
            date: Date.now()
        }
        this.tweetText.value = '';
        console.log(tweet);
    }

    render() {
        return (
            <form onSubmit={(e) => this.createTweet(e)}>
                <textarea ref={(input) => { this.tweetText = input}} 
                    placeholder="votre tweet"
                    className="full-width"
                    ></textarea><br/>
                <button type="submit" className="btn btn-xs btn-primary">poster</button>                
            </form>
        );
    }
}

export default TweetForm;