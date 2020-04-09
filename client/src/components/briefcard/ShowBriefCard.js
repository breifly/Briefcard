import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import IndexBlockProfile from '../briefcardTemplate/blockProfile/IndexBlockProfile';
import IndexBlockMessage from '../briefcardTemplate/blockMessage/IndexBlockMessage';
import IndexBlockExperience from '../briefcardTemplate/blockExperience/IndexBlockExperience';

class ShowBriefCard extends React.Component {
  componentDidMount() {
    this.props.getBriefCard(this.props.match.params.id);
  }

  renderBlockProfile = () => {
    if (this.props.briefCardCon) {
      return this.props.briefCardCon.map((brief) => {
        if (brief.profile) {
          return (
            <IndexBlockProfile
              key={brief._id}
              briefcard={brief}
              idBlock={brief.profile.id}
              id={this.props.match.params.id}
              briefcardEdit={true}
              briefUser={brief.user}
            />
          );
        } else {
          return null;
        }
      });
    }
  };

  renderBlockMessage = () => {
    if (this.props.briefCardCon) {
      return this.props.briefCardCon.map((brief) => {
        if (brief.note)
          return (
            <IndexBlockMessage
              key={brief._id}
              briefcard={brief}
              idBlock={brief.note.id}
              id={this.props.match.params.id}
              briefcardEdit={true}
              briefUser={brief.user}
            />
          );
        else {
          return null;
        }
      });
    }
  };

  renderBlockExperience = () => {
    if (this.props.briefCardCon) {
      return this.props.briefCardCon.map((brief) => {
        if (brief.experiences)
          return (
            <IndexBlockExperience
              key={brief._id}
              briefcard={brief}
              idBlock={brief.experiences.id}
              id={this.props.match.params.id}
              briefcardEdit={true}
              briefUser={brief.user}
            />
          );
        else {
          return null;
        }
      });
    }
  };

  sendBriefcard = () => {
    const idchatroom = [];
    this.props.briefCardCon.map((brief) => {
      const a = brief.chatroom;
      idchatroom.push(a);
    });

    const form = {
      id: idchatroom[0],
      user: this.props.auth._id,
    };
    console.log(form);
    this.props.sendBriefCard(this.props.match.params.id, form, () =>
      this.props.history.push(`/chatroom/${form.id}`)
    );
  };

  renderSendButton = () => {
    if (this.props.briefCardCon) {
      return this.props.briefCardCon.map((brief) => {
        if (brief.user === this.props.auth._id && brief.sent !== true)
          return (
            <div style={{ padding: '20px' }} className="center">
              <button onClick={() => this.sendBriefcard()} className="btn">
                Send
              </button>
            </div>
          );
        else {
          return null;
        }
      });
    }
  };

  render() {
    return (
      <div className="container">
        {this.renderBlockProfile()}
        {this.renderBlockMessage()}
        {this.renderBlockExperience()}
        {this.renderSendButton()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    briefCardCon: state.briefcard.briefcardDetails,
  };
}
export default connect(mapStateToProps, actions)(ShowBriefCard);
