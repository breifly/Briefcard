import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import ChatList from './ChatList';
import moment from 'moment';

class Chat extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getAllChatRoomByUSer(this.props.match.params.id);
  }

  renderAllChatRoom = () => {
    if (this.props.chats)
      return this.props.chats.map(chat => {
        const date = moment(chat.updatedAt).calendar();
        if (chat.sender[0] === this.props.match.params.id) {
          return (
            <div key={chat._id}>
              <Link to={`/chatroom/${chat._id}`}>
                <ChatList date={date} user={chat.receiver[0]} />
              </Link>
            </div>
          );
        } else {
          return (
            <div key={chat._id}>
              <Link to={`/chatroom/${chat._id}`}>
                <ChatList date={date} user={chat.sender[0]} />
              </Link>
            </div>
          );
        }
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
  return {
    auth: state.auth.authenticated,
    chats: state.chat.allChatByUser,
    messages: state.message.allMessage
  };
}

export default connect(mapStateToPros, actions)(Chat);
