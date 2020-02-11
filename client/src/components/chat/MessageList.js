import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getAllMessageByChatroom(this.props.id);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.props.getAllMessageByChatroom(this.props.id);
  //   }
  // }

  render() {
    if (this.props.messages)
      return this.props.messages.map(message => {
        return <div key={message._id}>{message.message_body}</div>;
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
  }
}

function mapStateToPros(state) {
  return {
    chatRoom: state.chat.chatroom,
    messages: state.message.allMessage
  };
}

export default connect(mapStateToPros, actions)(MessageList);
