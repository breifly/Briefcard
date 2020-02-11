import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import renderField from './renderField';
import MessageLists from './MessageLists';
import '../css/ChatRoom.css';

class ChatRoom extends React.Component {
  componentDidMount() {
    this.props.getChatroom(this.props.match.params.id);
    this.props.getAllMessageByChatroom(this.props.match.params.id);
  }

  submit = (message, dispatch) => {
    const form = {
      room: this.props.match.params.id,
      user: this.props.user._id,
      message: message
    };
    if (message) {
      this.props.createMessage(form, () =>
        this.props.getAllMessageByChatroom(this.props.match.params.id)
      );
      dispatch(reset('MessageRoom'));
    }
  };

  render() {
    const { error, handleSubmit, submitting } = this.props;
    return (
      <div className="container">
        {/* <p>chat room id {this.props.chatRoom._id}</p>
        <p>receiver {this.props.chatRoom.receiver}</p>
        <p>sender {this.props.chatRoom.sender}</p> */}
        <div className="box-chatroom">
          <h6 className="center title-chat">Chatroom created </h6>
          <MessageLists id={this.props.match.params.id} />
          <form onSubmit={handleSubmit(this.submit)}>
            <div className="row">
              <div className="col m12 s12">
                <div className="box-message">
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
                  <button
                    type="submit"
                    disabled={submitting}
                    className="waves-effect waves-light btn btn-signin btn-message"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            {error && <strong>{error}</strong>}
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToPros(state) {
  console.log(state);
  return {
    user: state.auth.authenticated,
    chatRoom: state.chat.chatroom,
    messages: state.message.allMessage
  };
}

export default compose(
  connect(mapStateToPros, actions),
  reduxForm({ form: 'MessageRoom' })
)(ChatRoom);
