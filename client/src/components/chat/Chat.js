import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import ChatList from './ChatList';
import moment from 'moment';
import io from 'socket.io-client';
import keys from '../../config/keys';
import ScrollAnimation from 'react-animate-on-scroll';

const socket = io.connect(`${keys.siteUrl}`);

class Chat extends React.Component {
  componentDidMount() {
    this.props.getAllChatRoomByUSer(this.props.match.params.id);
    socket.on('chat message', () => {
      this.props.getAllChatRoomByUSer(this.props.match.params.id);
    });
  }
  renderAllChatRoom = () => {
    if (this.props.chats)
      return this.props.chats.map((chat) => {
        let date = moment(chat.dateMessage).calendar();
        if (chat.sender === this.props.match.params.id) {
          return (
            <div key={chat._id}>
              <Link to={`/chatroom/${chat._id}`}>
                <ChatList
                  messageUnread={chat.unreadSender}
                  chatId={chat._id}
                  date={date}
                  user={chat.receiver}
                  msg={chat.lastMessage}
                />
              </Link>
            </div>
          );
        } else {
          return (
            <div key={chat._id}>
              <Link to={`/chatroom/${chat._id}`}>
                <ChatList
                  messageUnread={chat.unreadReceiver}
                  chatId={chat._id}
                  date={date}
                  user={chat.sender}
                  msg={chat.lastMessage}
                />
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

  renderNoChat = () => {
    return (
      <div className="no-chat center">
        <h4>Welcome to briefCard!</h4>
        <p>You have not started any conversation yet.</p>
        <div>
          <h5>Here's how to start:</h5>
          <div className="block-btn-chat">
            <Link
              className="btn-no-chat hoverable"
              to={`/briefcard-templates/${this.props.auth._id}`}
            >
              Create a BriefCard
            </Link>
          </div>
          <div className="block-btn-chat">
            <Link
              className="btn-no-chat hoverable"
              to={`/dashboard/${this.props.auth._id}`}
            >
              Network Virtually
            </Link>
          </div>
          <div className="block-btn-chat">
            <Link
              className="btn-no-chat hoverable"
              to={`/briefcard-templates/${this.props.auth._id}`}
            >
              Sync Leads & Contacts
            </Link>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.propschats ? (
          <div className="background-chatlist">
            <div className="container">
              <h4 className="white-text">Chat List</h4>
              <ScrollAnimation animateOnce={true} animateIn="bounceInLeft">
                {this.renderAllChatRoom()}
              </ScrollAnimation>
            </div>
          </div>
        ) : (
          this.renderNoChat()
        )}
      </div>
    );
  }
}

function mapStateToPros(state) {
  return {
    auth: state.auth.authenticated,
    chats: state.chat.allChatByUser,
  };
}

export default connect(mapStateToPros, actions)(Chat);
