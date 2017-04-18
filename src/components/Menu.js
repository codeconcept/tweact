import React from 'react';
import Search from './Search';

class Menu extends React.Component {
    resetTweets(event) {
        this.props.resetTweets();
    }

    render() {
        return(
            <div className="vertical-spacer">
                <span className="horizontal-spacer">home</span>
                <span className="horizontal-spacer">notification</span>
                <span className="horizontal-spacer">messages</span>
                <span className="horizontal-spacer"><Search/></span>
                <span className="horizontal-spacer">
                    <button className='btn btn-xs btn-danger' onClick={(evt) => this.resetTweets(evt)}>
                        reset tweets
                    </button>
                </span>
            </div>
        )
    }
}

export default Menu;