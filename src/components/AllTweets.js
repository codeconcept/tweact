import React from 'react';
import Tweet from './Tweet';

const AllTweets = (props) => {
    console.log(props);
    console.log(props.tweets);
    console.log(Object.keys(props.tweets));
    return (
        <div>
            { 
                Object.keys(props.tweets)
                      .map(t => <Tweet key={props.tweets[t].id} 
                                        name={props.tweets[t].name} 
                                        handle={props.tweets[t].handle} 
                                        text={props.tweets[t].text} 
                                        
                                />)
            }
        </div>
    );
};

export default AllTweets;