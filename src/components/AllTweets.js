import React from 'react';
import Tweet from './Tweet';

const AllTweets = (props) => {
    return (
        <div>
            { 
                Object.keys(props.tweets)
                      .map(t => <Tweet key={props.tweets[t].id} 
                                        name={props.tweets[t].name} 
                                        handle={props.tweets[t].handle} 
                                        text={props.tweets[t].text} 
                                        date={props.tweets[t].date}
                                        
                                />)
            }
        </div>
    );
};

export default AllTweets;