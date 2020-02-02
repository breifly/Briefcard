import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import User from './User';
import M from 'materialize-css/dist/js/materialize.min.js';
import SwipeCard from './SwipeCard';

class Discover extends React.Component {
  componentDidMount() {
    this.props.getAllUser();
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }

  matchDiscover = (userId, friendId, match) => {
    const discover = {
      userId: userId,
      friendId: friendId,
      isMatch: match
    };
    this.props.createDiscover(discover);
  };

  renderAllUser = () => {
    if (this.props.users)
      return this.props.users.map(user => {
        if (
          user._id !== this.props.auth._id &&
          !user.liked.includes(this.props.auth._id) &&
          !user.unliked.includes(this.props.auth._id)
        ) {
          return (
            <div key={user._id}>
              <User matchDiscover={this.matchDiscover} user={user} />
              <button
                className="btn"
                onClick={() =>
                  this.matchDiscover(this.props.auth._id, user._id, true)
                }
              >
                Yes
              </button>
              <button
                className="btn"
                onClick={() =>
                  this.matchDiscover(this.props.auth._id, user._id, false)
                }
              >
                No
              </button>
            </div>
          );
        }
        return null;
      });
  };

  action() {
    console.log('hello');
  }

  render() {
    return (
      <div className="">
        {/* {this.renderAllUser()} */}
        <SwipeCard />
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
// this.props.getDiscoverByUser(this.props.auth._id || id);
