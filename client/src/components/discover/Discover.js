import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Discover extends React.Component {
  componentDidMount() {
    this.props.getAllUser();
    this.props.getAllDiscover();
  }

  matchDiscover = (userId, friendId) => {
    const discover = {
      userId: userId,
      friendId: friendId,
      isMatch: true
    };
    this.props.createDiscover(discover);
  };

  unmatchDiscover = (userId, friendId) => {
    const discover = {
      userId: userId,
      friendId: friendId,
      isMatch: false
    };
    this.props.createDiscover(discover);
  };

  renderAllUsers = () => {
    if (this.props.users) {
      return this.props.users.map(user => {
        if (this.props.auth._id !== user._id)
          return (
            <div key={user._id} className="col m4 card">
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
              <button
                className="btn"
                onClick={() =>
                  this.matchDiscover(this.props.auth._id, user._id)
                }
              >
                Yes
              </button>
              <button
                className="btn"
                onClick={() =>
                  this.unmatchDiscover(this.props.auth._id, user._id)
                }
              >
                No
              </button>
            </div>
          );
      });
    }
  };

  render() {
    return <div className="row">{this.renderAllUsers()}</div>;
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
