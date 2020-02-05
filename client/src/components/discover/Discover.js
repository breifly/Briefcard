import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TinderCard from 'react-tinder-card';
import '../css/SwipeCard.css';

class Discover extends React.Component {
  state = {
    direction: ''
  };

  componentDidMount() {
    this.props.getAllUser();
  }

  matchDiscover = (userId, friendId, match) => {
    const discover = {
      userId: userId,
      friendId: friendId,
      isMatch: match
    };
    this.props.createDiscover(discover);
  };

  onSwipe = (direction, user) => {
    console.log('You swiped: ' + direction);
    if (direction === 'right' || direction === 'up') {
      this.matchDiscover(this.props.auth._id, user, true);
    } else {
      this.matchDiscover(this.props.auth._id, user, false);
    }
  };

  onCardLeftScreen = myIdentifier => {
    console.log(myIdentifier + ' left the screen');
  };

  renderAllUserTest = () => {
    if (this.props.users)
      return this.props.users.map(user => {
        if (
          user._id !== this.props.auth._id &&
          !user.liked.includes(this.props.auth._id) &&
          !user.unliked.includes(this.props.auth._id)
        ) {
          return (
            <TinderCard
              key={user._id}
              onSwipe={dir => this.onSwipe(dir, user._id)}
              onCardLeftScreen={() => this.onCardLeftScreen(user.like)}
              className="swipe"
            >
              <div
                style={{
                  backgroundImage: `url(${user.avatar ||
                    process.env.PUBLIC_URL + '/images/lechef.jpg'})`
                }}
                className="card-tinder"
              >
                <p>{user.email}</p>
              </div>
            </TinderCard>
          );
        }
        return null;
      });
  };

  render() {
    return (
      <div className="">
        {/* {this.renderAllUser()} */}
        <div className="swipe-card-box">
          <div className="cardContainer">{this.renderAllUserTest()}</div>
        </div>
        {/* <Swipe /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    users: state.user.allUsers,
    discovers: state.discover.allDiscovers
  };
}
export default connect(mapStateToProps, actions)(Discover);

// const url = window.location.pathname;
// const id = url.substring(url.lastIndexOf('/') + 1);
// this.props.getDiscoverByUser(this.props.auth._id || id)
