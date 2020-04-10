import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import io from 'socket.io-client';
import keys from '../../config/keys';
import { Link } from 'react-router-dom';
import { MessageList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import moment from 'moment';
import '../css/ChatRoom.css';
const audio = new Audio(process.env.PUBLIC_URL + '/images/clearly.mp3');
const socket = io.connect(`${keys.siteUrl}`);

class ChatRoomSocket extends Component {
  constructor() {
    super();
    this.state = { msg: '', chat: [], error: '', value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getChatRoomDetails(this.props.match.params.id);
    this.props.getAllMessageByChatroom(this.props.match.params.id);
    this.props.getAllBriefCardTemplate(this.props.authenticated._id);
    // get briefcard by chatroom id
    this.props.getBriefCardByChatroom(this.props.match.params.id);
    const { authenticated } = this.props;
    let formMessage = {
      user: authenticated._id,
      room: this.props.match.params.id,
    };
    this.props.getUsersChatroom(this.props.match.params.id);
    this.props.readMessage(formMessage);
    socket.on('chat message', (msg) => {
      if (msg.room === this.props.match.params.id) {
        this.setState({
          chat: [...this.state.chat, msg],
        });
        audio.play();
      }
      this.props.readMessage(formMessage);
    });
  }

  onTextChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  onMessageSubmit = () => {
    if (this.state.msg) {
      this.setState({ error: '' });
      let form = {
        room: this.props.match.params.id,
        user: this.props.authenticated._id,
        message: this.state.msg,
        date: Date.now(),
      };
      socket.emit('chat message', form);
      this.props.createMessage(form);
      this.setState({ msg: '' });
      socket.emit('update chatlist');
      audio.play();
    } else {
      this.setState({ error: 'there is no message' });
    }
  };

  renderOldMessage = () => {
    const { messages } = this.props;
    return messages.map((message) => (
      <MessageList
        key={message._id}
        className="message-list"
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
          {
            position: `${
              message.user === this.props.authenticated._id ? 'right' : 'left'
            }`,
            type: 'text',
            text: `${message.message_body}`,
            dateString: `${moment(message.createdAt).calendar()}`,
          },
        ]}
      />
    ));
  };

  renderChat() {
    const { chat } = this.state;
    return chat.map(({ id, msg, user, date }, idx) => (
      <MessageList
        key={idx}
        className="message-list"
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
          {
            position: `${
              user === this.props.authenticated._id ? 'right' : 'left'
            }`,
            type: 'text',
            text: `${msg}`,
            dateString: `${moment(date).calendar()}`,
          },
        ]}
      />
    ));
  }

  renderUser = () => {
    if (this.props.users && this.props.authenticated)
      return this.props.users.map((user) => {
        if (user._id !== this.props.authenticated._id) {
          return (
            <Link
              className="hoverable"
              key={user._id}
              to={`/chatroom/user/${user._id}`}
            >
              <img className="avatar" src={user.avatar} alt="avatar"></img>
            </Link>
          );
        } else {
          return null;
        }
      });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = {
      id: this.state.value,
      chatroom: this.props.match.params.id,
    };
    this.props.createBriefCard(form, (id) =>
      this.props.history.push(`/briefcard/${id}`)
    );
  }

  renderBriefCardSent = () => {
    if (this.props.chatdetails) {
      return this.props.chatdetails.map((briefcard, idx) => {
        if (briefcard.user !== this.props.authenticated._id) {
          return (
            <Link
              className="hoverable center"
              key={idx}
              to={`/briefcard/${briefcard.briefcardId}`}
            >
              <div>His BriefCard</div>
            </Link>
          );
        } else {
          return (
            <Link
              className="hoverable center"
              key={idx}
              to={`/briefcard/${briefcard.briefcardId}`}
            >
              <div>Your BriefCard</div>
            </Link>
          );
        }
      });
    }
    return null;
  };

  renderListBriefCardTemplate = () => {
    if (this.props.templates) {
      return this.props.templates.map((briefcardTemplate, idx) => {
        return (
          <option key={idx} value={briefcardTemplate._id}>
            {briefcardTemplate.name || idx}
          </option>
        );
      });
    } else {
      return null;
    }
  };

  renderForm = () => {
    return (
      <form className="select-briefCard" onSubmit={this.handleSubmit}>
        <select
          className="select-briefCard"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="" disabled selected>
            Choose your Template
          </option>
          {this.renderListBriefCardTemplate()}
        </select>
        <button
          type="submit"
          value="Submit"
          className="btn btn-signin btn-message"
        >
          Select
        </button>
      </form>
    );
  };

  render() {
    return (
      <div className="background-chat">
        <div className="container">
          <div className="box-date white-text">
            <h5 className="center title-chat">
              Chatroom <i className="far fa-comments"></i>
            </h5>
            <div className="center">{this.renderUser()}</div>
            {this.renderForm()}
            {this.renderBriefCardSent()}
          </div>
          <div className="box-chatroom">
            {this.props.messages && <div>{this.renderOldMessage()}</div>}
            <div>{this.renderChat()}</div>
          </div>

          <div className="box-message">
            {this.state.error && (
              <div className="red-text center">{this.state.error}</div>
            )}
            <div className="input-field">
              <i className="material-icons prefix">message</i>
              <input
                style={{ color: 'white' }}
                onChange={(e) => this.onTextChange(e)}
                value={this.state.msg}
                id="icon_prefix"
                className="validate"
                type="text"
              />
            </div>
            <button
              className="waves-effect waves-light btn btn-signin btn-message"
              onClick={this.onMessageSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToPros(state) {
  return {
    users: state.chat.users,
    authenticated: state.auth.authenticated,
    messages: state.message.allMessage,
    chatRoom: state.chat.chatroom,
    templates: state.briefcardTemplate.templates,
    briefcardChat: state.briefcard.briefcardChatroom,
    chatdetails: state.chat.chatroomDetails.sendBriefcard,
  };
}

export default connect(mapStateToPros, actions)(ChatRoomSocket);
