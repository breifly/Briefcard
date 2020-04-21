import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import IndexBlockProfile from '../briefcardTemplate/blockProfile/IndexBlockProfile';
import IndexBlockMessage from '../briefcardTemplate/blockMessage/IndexBlockMessage';
import IndexBlockExperience from '../briefcardTemplate/blockExperience/IndexBlockExperience';
import IndexBlockInterest from '../briefcardTemplate/blockInterest/IndexBlockInterest';

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

  renderBlockInterest = () => {
    if (this.props.briefCardCon) {
      return this.props.briefCardCon.map((brief) => {
        if (brief.interest)
          return (
            <IndexBlockInterest
              key={brief._id}
              briefcard={brief}
              idBlock={brief.interest.id}
              id={this.props.match.params.id}
              briefUser={brief.user}
              briefcardEdit={true}
            />
          );
        else {
          return null;
        }
      });
    }
  };

  sendBriefcard = () => {
    const form = {
      id: this.props.briefCardCon[0].chatroom,
      user: this.props.auth._id,
    };
    this.props.sendBriefCard(this.props.match.params.id, form, () =>
      this.props.history.push(`/chatroom/${form.id}`)
    );
  };

  deleteBriefcard = () => {
    const form = {
      id: this.props.briefCardCon[0].chatroom,
      user: this.props.auth._id,
    };
    this.props.deleteBriefCard(this.props.match.params.id, form, () =>
      this.props.history.push(`/chatroom/${form.id}`)
    );
  };

  renderSendButton = () => {
    if (this.props.briefCardCon) {
      return this.props.briefCardCon.map((brief) => {
        if (brief.user === this.props.auth._id && brief.sent !== true)
          return (
            <div key={brief._id} style={{ padding: '20px' }} className="center">
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

  renderDeleteBriefcard = () => {
    if (this.props.briefCardCon) {
      return this.props.briefCardCon.map((brief) => {
        if (brief.user === this.props.auth._id)
          return (
            <div key={brief._id} style={{ padding: '20px' }} className="center">
              <button
                onClick={() => this.deleteBriefcard()}
                className="btn red"
              >
                Delete
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
        <div className="box-briefcard-template">
          {this.renderBlockProfile()}
          {this.renderBlockMessage()}
          {this.renderBlockExperience()}
          {this.renderBlockInterest()}
          {this.renderSendButton()}
          {this.renderDeleteBriefcard()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
    briefCardCon: state.briefcard.briefcardDetails,
  };
}
export default connect(mapStateToProps, actions)(ShowBriefCard);
