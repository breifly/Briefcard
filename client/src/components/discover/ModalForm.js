import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ModalForm extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="modal-match slideUp">
        <div className="row center">
          <h4>It's a Match!</h4>
          <div className="col m6 s6">
            <img
              className="avatar-large-match  slideLeft"
              src={user.avatar}
              alt="avatar-friend"
            />
          </div>
          <div className="col m6 s6">
            <img
              className="avatar-large-match slideRight "
              src={this.props.auth.avatar}
              alt="avatar-friend"
            />
          </div>
        </div>
        <p style={{ marginBottom: '20px' }} className="center">
          Time to make your first impression.
        </p>
        <div className="button-match center">
          <Link to={`/chatroom/${this.props.idchat._id}`}>Send Message</Link>
        </div>
        <div className="button-match center" onClick={this.props.closeModal}>
          Keep Swiping
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
    users: state.user.allUsers,
    idchat: state.chat.chats,
  };
}
export default connect(mapStateToProps, null)(ModalForm);
