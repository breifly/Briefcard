import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BlockMessage01 from './BlockMessage01';

class IndexBlockMessage extends React.Component {
  renderBlockMessage = () => {
    switch (this.props.idBlock) {
      case 'BlockMessage01':
        return (
          <BlockMessage01
            briefcard={this.props.briefcard}
            title={this.props.briefcard.note.title}
            message={this.props.briefcard.note.message}
          />
        );
      case 'BlockMessage02':
        return <div>hello block Message02</div>;
      default:
        return;
    }
  };
  render() {
    return <div>{this.renderBlockMessage()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}
export default connect(mapStateToProps, actions)(IndexBlockMessage);
