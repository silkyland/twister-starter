import React from 'react';

const Tweet = (props) => (
    <div className="tweet-list">
        <div className="tweet">
            <a href="user.html">
                <div className="name">
                    {props.name}
                </div>
                <div className="screen-name">
                    @{props.username}
                </div>
            </a>
            <div className="tweet-text">
                {props.tweetText}
            </div>
            <div className="action">
                <div className="reply" data-toggle="modal" data-target="#replyModal"><i className="fa fa-reply"></i></div>
            </div>
        </div>
    </div>
);

Tweet.propTypes = {
    name: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    tweetText: React.PropTypes.string.isRequired
};

export default Tweet;