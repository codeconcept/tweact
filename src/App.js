import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Pomodoro from './components/Pomodoro';
import TweetForm from './components/TweetForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>Tweact</h2>
        </div>
        
        <div>
          <Counter initialvalue="1969" />
        </div>
        <br/>
        <div>
          <Pomodoro />
        </div>
        <br/>
        <div>
          <TweetForm />
        </div>

      </div>      
    );
  }
}

export default App;
