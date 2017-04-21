import React, { Component } from 'react';
import './App.css';
import TweetForm from './components/TweetForm';
import PreviousTweets from './tweets';
import AllTweets from './components/AllTweets';
import Trends from './components/Trends';
import UserSummary from './components/UserSummary';
import base from './base';

class App extends Component {
  constructor() {
    super();
    this.resetTweets = this.resetTweets.bind(this);
    this.addTweet = this.addTweet.bind(this);
    this.state = {
      tweets: PreviousTweets
    }
  }

  componentWillMount() {
    this.ref = base.syncState('/tweets', {
      context: this,
      state: 'tweets'
    });
    console.log('this.ref', this.ref);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTweet(tweet) {
    // retrieve state of tweets
    let currentTweets = {...this.state.tweets};
    const idSuffix = Object.keys(currentTweets).length + 1;
    const id = `tweet${idSuffix}`;
    tweet.id = idSuffix;
    currentTweets[id] = tweet;
    this.setState({ tweets: currentTweets});
  }

  resetTweets() {
    this.setState({ tweets: PreviousTweets });
  }

  render() {
    return (
      <div className="container">
        
        <div className="row">          
          <div className="col-md-3 column-one">
            résumé utilisateur
            <UserSummary />
            <Trends />
          </div>
          <div className="col-md-7 column-two">
            <TweetForm addTweet={this.addTweet} />
            <AllTweets tweets={this.state.tweets} />
          </div>
          <div className="col-md-2 column-three">
            suggestions
          </div>
        </div>
        
        
        <div>
          
        </div>

      </div>      
    );
  }
}

export default App;
