import React from 'react';

const AllTweets = (props) => {
    return (
        <div>
            { Object.keys(props.tweets).map(k => <div key={k}>{k}</div>)}
        </div>
    );
};

export default AllTweets;