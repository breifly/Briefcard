import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TinderCard from 'react-tinder-card';
import ModalForm from './ModalForm';
import '../css/SwipeCard.css';

class Discover extends React.Component {
  state = {
    isMatch: false,
    user: ''
  };
  componentDidMount() {
    this.props.getAllUser();
  }

  matchDiscover = (userId, friendId, match, user) => {
    const discover = {
      userId: userId,
      friendId: friendId,
      isMatch: match
    };
    this.props.createDiscover(discover);
  };

  onSwipe = (direction, userId, user) => {
    if (direction === 'right' || direction === 'up') {
      this.matchDiscover(this.props.auth._id, userId, true, user);
    } else {
      this.matchDiscover(this.props.auth._id, userId, false, user);
    }
  };

  onCardLeftScreen = user => {
    if (
      this.props.discovers.isMatch === true &&
      this.props.auth.liked.includes(this.props.discovers.friendId)
    ) {
      this.setState({ isMatch: true });
      this.setState({ user: user });
    } else {
      this.setState({ isMatch: false });
      this.setState({ user: '' });
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
              onSwipe={dir => this.onSwipe(dir, user._id, user)}
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
          <div className="cardContainer">
            {this.renderAllUserTest()}
            {this.state.isMatch === true ? (
              <ModalForm user={this.state.user} />
            ) : (
              ''
            )}
          </div>
        </div>
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
