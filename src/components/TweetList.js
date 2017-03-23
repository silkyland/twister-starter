/**
 * Created by silkyland on 3/22/2017 AD.
 */
import React from 'react';
import Tweet from './Tweet';


const TweetList = (props) => (
    <div className="tweet-list">
        {props.tweets.map((tweet) =>
            <Tweet key={tweet.id} name={tweet.name} username={tweet.username} tweetText={tweet.tweetText}/>
        )}
    </div>
);

TweetList.defaultProps = {
    tweets: [],
}

export default TweetList;
