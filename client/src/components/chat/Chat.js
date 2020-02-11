import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class Chat extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderAllChatRoom = () => {
    if (this.props.auth.chatroom)
      return this.props.auth.chatroom.map(chat => {
        return (
          <div key={chat}>
            <Link key={chat} to={`/chatroom/${chat}`}>
              <i className="far fa-comments"></i> ChatRoom
            </Link>
          </div>
        );
      });
    return (
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <h2>Chat List</h2>
        {this.renderAllChatRoom()}
      </div>
    );
  }
}

function mapStateToPros(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated
  };
}

export default connect(mapStateToPros, actions)(Chat);
