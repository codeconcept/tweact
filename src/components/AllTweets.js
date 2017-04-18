import React from 'react';
import Tweet from './Tweet';

const createTweetFromProps = (tweet) => {
    return (<Tweet key={tweet.id} name={tweet.name} handle={tweet.handle} text={tweet.text} date={tweet.date} />);    
}

const AllTweets = (props) => {
    return (
        <div>
            { 
                Object.keys(props.tweets)
                      .map(t => createTweetFromProps(props.tweets[t]))
            }
        </div>
    );
};

export default AllTweets;