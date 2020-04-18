import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BlockMessage01 from './BlockMessage01';
import BlockMessage02 from './BlockMessage02';

class IndexBlockMessage extends React.Component {
  state = {
    title: this.props.briefcard.note.title,
    message: this.props.briefcard.note.message,
  };

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveMessage = (form) => {
    const id = this.props.id;
    form = {
      id: this.props.idBlock,
      title: this.state.title,
      message: this.state.message,
    };
    if (this.props.briefcardEdit) {
      // edit from briefCard
      this.props.editBriefCard(id, form, () =>
        this.props.getBriefCard(this.props.id)
      );
    } else {
      // edit from briefCard Template
      this.props.editBriefCardTemplate(id, form, () =>
        this.props.getBriefCardTemplate(this.props.id)
      );
    }
  };

  renderBlockMessage = () => {
    switch (this.props.idBlock) {
      case 'BlockMessage01':
        return (
          <BlockMessage01
            title={this.state.title}
            message={this.state.message}
            handleType={this.handleType}
            saveMessage={this.saveMessage}
            index={this.props.id}
            briefUser={this.props.briefUser}
          />
        );
      case 'BlockMessage02':
        return (
          <BlockMessage02
            title={this.state.title}
            message={this.state.message}
            handleType={this.handleType}
            saveMessage={this.saveMessage}
            index={this.props.id}
            briefUser={this.props.briefUser}
          />
        );
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
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(IndexBlockMessage);
