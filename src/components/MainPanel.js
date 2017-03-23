import React from 'react';
import NewTweet from './NewTweet';
import TweetList from  './TweetList';
import config from '../configs';

class MainPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            username: this.props.username,
            tweets: []
        };
        this.addToTweetList = this.addToTweetList.bind(this);
    }

    componentDidMount() {
        const uri = `http://${config.api.host}:${config.api.port}/api/tweets`;
        const filter = `{ "where": { "username": "${this.state.username}" }}`;

        fetch(`${uri}?filter=${filter}`, {
            mode: 'cors',
        })
            .then(response => response.json())
            .then((tweets) => {
                console.log(tweets);
                this.setState({
                    tweets: tweets
                })
            })
    }


    addToTweetList(tweet) {
        const tweetWithId = tweet;
        tweetWithId.id = this.state.tweets.length;

        this.setState({
            tweets: [
                ...this.state.tweets,
                tweetWithId,
            ]
        })
    }

    render() {
        return (
            <div className="main-panel">
                {this.props.enableTweet
                    ? <NewTweet
                    name={this.state.name}
                    username={this.state.username}
                    addToTweetList={this.addToTweetList}
                />
                    : null}

                <TweetList tweets={this.state.tweets}/>

            </div>
        )
    }
}

export default MainPanel;
