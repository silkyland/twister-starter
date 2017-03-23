import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile">
                <ProfileHeader
                    name={this.props.name}
                    username={this.props.username}
                />
                <ProfileDetail
                    numTweets={this.props.numTweets}
                    numFollower={this.props.numFollower}
                    numFollowing={this.props.numFollowing}
                />
                <ProfileFollow
                    isFollowing={this.props.isFollowing}
                />
            </div>
        );
    }
}

const ProfileHeader = (props) => (
    <div className="header">
        <div className="name">{props.name}</div>
        <div className="screen-name">@{props.username}</div>
    </div>
);

const ProfileDetail = (props) => (
    <div className="detail">
        <div className="col">
            <div className="text">Tweets</div>
            <div className="number">{props.numTweets}</div>
        </div>
        <div className="col">
            <div className="text">Followers</div>
            <div className="number">{props.numFollower}</div>
        </div>
        <div className="col">
            <div className="text">Following</div>
            <div className="number">{props.numFollowing}</div>
        </div>
    </div>
);

const ProfileFollow = (props) => (
    <div className="action last-section">
        {props.isFollowing ?
            <input type="button" className="btn btn-danger btn-lg" value="Unfollow"/>
            :
            <input type="button" className="btn btn-default btn-lg" value="Follow"/>
        }
    </div>
);

export default Profile;