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
    this.state = {
      tweets: PreviousTweets
    }
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
            <TweetForm />
            <AllTweets tweets={PreviousTweets} />
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
