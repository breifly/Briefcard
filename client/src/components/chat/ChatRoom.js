import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import renderField from './renderField';
import MessageList from './MessageList';

class ChatRoom extends React.Component {
  componentDidMount() {
    this.props.getChatroom(this.props.match.params.id);
    this.props.getAllMessageByChatroom(this.props.match.params.id);
  }

  submit = (message, dispatch) => {
    const form = {
      room: this.props.match.params.id,
      user: this.props.chatRoom.sender,
      message: message
    };
    if (message) {
      this.props.createMessage(form, () =>
        this.props.getAllMessageByChatroom(this.props.match.params.id)
      );
      dispatch(reset('MessageRoom'));
    }
  };

  renderAllMessage = () => {
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
  };

  render() {
    const { error, handleSubmit, submitting } = this.props;
    return (
      <div className="container">
        <p>chat room id {this.props.chatRoom._id}</p>
        <p>receiver {this.props.chatRoom.receiver}</p>
        <p>sender {this.props.chatRoom.sender}</p>
        <form onSubmit={handleSubmit(this.submit)}>
          <div className="col m12 s12">
            <div className="box-input-signin">
              <div className="input-field">
                <Field
                  name="message"
                  type="text"
                  component={renderField}
                  placeholder="message"
                  label="message"
                  icon="create"
                />
              </div>
            </div>
          </div>
          {error && <strong>{error}</strong>}
          <div className="center">
            <button
              type="submit"
              disabled={submitting}
              className="waves-effect waves-light btn btn-signin"
            >
              Send
            </button>
          </div>
        </form>
        <MessageList id={this.props.match.params.id} />
      </div>
    );
  }
}

function mapStateToPros(state) {
  console.log(state);
  return {
    chatRoom: state.chat.chatroom,
    messages: state.message.allMessage
  };
}

export default compose(
  connect(mapStateToPros, actions),
  reduxForm({ form: 'MessageRoom' })
)(ChatRoom);
