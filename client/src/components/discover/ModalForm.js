import React from 'react';
import { connect } from 'react-redux';

class ModalForm extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="modal-match slideUp">
        <div className="row center">
          <h4>Done Deal!</h4>
          <div className="col m6 s6">
            <img
              className="avatar-large slideLeft"
              src={user.avatar || process.env.PUBLIC_URL + '/images/lechef.jpg'}
              alt="avatar-friend"
            />
          </div>
          <div className="col m6 s6">
            <img
              className="avatar-large slideRight "
              src={
                this.props.auth.avatar ||
                process.env.PUBLIC_URL + '/images/lechef.jpg'
              }
              alt="avatar-friend"
            />
          </div>
        </div>
        <p className="center">
          You have made a new connection with {user.firstName}!
        </p>
        <div className="button-match center">
          <i className="far fa-comments"></i> Send a Message
        </div>
        <div className="button-match center" onClick={this.props.closeModal}>
          <i className="fas fa-users"></i> Keep Swiping
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    users: state.user.allUsers
  };
}
export default connect(mapStateToProps, null)(ModalForm);
