import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ChatRoom extends React.Component {
  componentDidMount() {
    this.props.getChatroom(this.props.match.params.id);
  }

  render() {
    return (
      <div className="container">
        <p>chat room id {this.props.chatRoom._id}</p>
        <p>receiver {this.props.chatRoom.receiver}</p>
        <p>sender {this.props.chatRoom.sender}</p>
        <p>Messages {this.props.chatRoom.messages}</p>
      </div>
    );
  }
}

function mapStateToPros(state) {
  console.log(state);
  return {
    chatRoom: state.chat.chatroom
  };
}

export default connect(mapStateToPros, actions)(ChatRoom);

// http://localhost:3000/chatroom/5e41f021f463a146c76e9c58
