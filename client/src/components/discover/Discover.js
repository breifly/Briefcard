import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Discover extends React.Component {
  componentDidMount() {
    this.props.getAllUser();
  }

  renderAllUsers = () => {
    if (this.props.users) {
      return this.props.users.map(user => {
        if (this.props.auth._id !== user._id)
          return (
            <div key={user._id} className="card">
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <button>Yes</button>
              <button>No</button>
            </div>
          );
      });
    } else {
      return null;
    }
  };

  render() {
    return <div>{this.renderAllUsers}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    users: state.discover.allUsers
  };
}
export default connect(mapStateToProps, actions)(Discover);
