import React from 'react';
import MainPanel from './MainPanel';
import Profile from  './Profile';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Bundit Nuntates',
            username: 'silkyland',
            numTweets: 43,
            numFollower: 22,
            numFollowing: 15,
            isFollowing: true,
        };
    }

    render() {
        return (
            <div className="container body">
                <div className="left-panel">
                    <Profile {...this.state} />
                    <MainPanel name={this.state.name} username={this.state.username} enableTweet={true}/>
                </div>
            </div>
        );
    };
}


export default App
