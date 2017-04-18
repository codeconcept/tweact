import React, { Component } from 'react';
import './App.css';
import TweetForm from './components/TweetForm';
import Menu from './components/Menu';
import PreviousTweets from './tweets';
import AllTweets from './components/AllTweets';
import Trends from './components/Trends';
import UserSummary from './components/UserSummary';


class App extends Component {
  constructor() {
    super();
    this.resetTweets = this.resetTweets.bind(this);
    this.addTweet = this.addTweet.bind(this);
    this.state = {
      tweets: PreviousTweets
    }
  }

  addTweet(tweet) {
    // retrieve state of tweets
    let currentTweets = {...this.state.tweets};
    const idSuffix = Object.keys(currentTweets).length + 1;
    const id = `tweet${idSuffix}`;
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
          <Menu resetTweets={this.resetTweets} />
        </div>
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
