import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ChatRoom extends React.Component {
  render() {
    return <div className="container">chatRoom id </div>;
  }
}

function mapStateToPros(state) {
  console.log(state);
  return {};
}

export default connect(mapStateToPros, actions)(ChatRoom);
