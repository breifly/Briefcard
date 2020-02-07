import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TinderCard from 'react-tinder-card';
// import ModalForm from './ModalForm';
import '../css/SwipeCard.css';

class Discover extends React.Component {
  state = {
    isMatch: false,
    user: ''
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

  onSwipe = (direction, userId) => {
    if (direction === 'right' || direction === 'up') {
      this.matchDiscover(this.props.auth._id, userId, true);
    } else {
      this.matchDiscover(this.props.auth._id, userId, false);
    }
  };

  onCardLeftScreen = user => {
    if (
      this.props.discovers.isMatch === true &&
      this.props.auth.liked.includes(this.props.discovers.friendId)
    ) {
      console.log('is match');
      this.setState({ isMatch: true });
      this.setState({ user: user });
    } else {
      this.setState({ isMatch: false });
    }
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
              onCardLeftScreen={() => this.onCardLeftScreen(user)}
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
        <div className="swipe-card-box">
          <div className="cardContainer">{this.renderAllUserTest()}</div>
        </div>
        {this.state.isMatch === true ? (
          <div>
            modal is here {''}
            {this.state.user.email}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    users: state.user.allUsers,
    discovers: state.discover.createDiscover
  };
}
export default connect(mapStateToProps, actions)(Discover);
