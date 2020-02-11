import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { MessageList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
class MessageLists extends React.Component {
  componentDidMount() {
    this.props.getAllMessageByChatroom(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.props.getAllMessageByChatroom(this.props.id);
    }
  }

  renderAllMessage = () => {
    if (this.props.messages && this.props.user._id)
      return this.props.messages.map(message => {
        if (message.user[0] === this.props.user._id) {
          return (
            <MessageList
              key={message._id}
              className="message-list"
              lockable={true}
              toBottomHeight={'100%'}
              dataSource={[
                {
                  position: 'right',
                  type: 'text',
                  text: `${message.message_body}`,
                  date: `${message.created_at}`
                }
              ]}
            />
          );
        } else {
          return (
            <MessageList
              key={message._id}
              className="message-list"
              lockable={true}
              toBottomHeight={'100%'}
              dataSource={[
                {
                  position: 'left',
                  type: 'text',
                  text: `${message.message_body}`,
                  date: `${message.created_at}`
                }
              ]}
            />
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
    return <div className="box-message-list">{this.renderAllMessage()}</div>;
  }
}

function mapStateToPros(state) {
  return {
    user: state.auth.authenticated,
    chatRoom: state.chat.chatroom,
    messages: state.message.allMessage
  };
}

export default connect(mapStateToPros, actions)(MessageLists);
