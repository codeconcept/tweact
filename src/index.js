import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 

import App from './App';
import './index.css';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Search from './components/Search';

const BasicRoutes = () => {
    return (
    <Router>
        <div>
        <ul>
            <span className="horizontal-spacer"><Link to="/">Home</Link></span>
            <span className="horizontal-spacer"><Link to="/notifications">notifications</Link></span>
            <span className="horizontal-spacer"><Link to="/messages">messages</Link></span>
            <span className="horizontal-spacer"><Search/></span>
        </ul>

        <hr/>

            <Route exact path="/" component={App} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/messages" component={Messages} />
        </div>
    </Router>
    )
}


ReactDOM.render(
    <BasicRoutes />, document.getElementById('root')
)
