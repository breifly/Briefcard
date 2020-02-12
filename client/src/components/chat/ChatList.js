import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { ChatItem } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

class ChatLists extends React.Component {
  componentDidMount() {
    this.props.getAllUser();
  }

  renderChatItem = () => {
    if (this.props.users) {
      return this.props.users.map(user => {
        if (user._id === this.props.user) {
          return (
            <div key={user._id}>
              <ChatItem
                avatar={user.avatar}
                alt={'Reactjs'}
                title={user.firstName}
                subtitle={user.email}
                dateString={this.props.date}
              />
            </div>
          );
        } else {
          return null;
        }
      });
    }
  };

  render() {
    return <div>{this.renderChatItem()}</div>;
  }
}

function mapStateToPros(state) {
  return {
    users: state.user.allUsers
  };
}

export default connect(mapStateToPros, actions)(ChatLists);
