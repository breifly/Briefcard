import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import IndexBlockProfile from './blockProfile/IndexBlockProfile';
import IndexBlockMessage from './blockMessage/IndexBlockMessage';
import IndexBlockExperience from './blockExperience/IndexBlockExperience';
import IndexBlockInterest from './blockInterest/IndexBlockInterest';

class ShowBriefCardTemplate extends React.Component {
  componentDidMount() {
    this.props.getBriefCardTemplate(this.props.match.params.id);
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
            />
          );
        else {
          return null;
        }
      });
    }
  };

  deleteBriefCardTemplate = () => {
    if (this.props.briefCardCon) {
      for (let i = 0; i < this.props.briefCardCon.length; i++) {
        const id = this.props.briefCardCon[i]._id;
        this.props.deleteBriefCardTemplate(id, () =>
          this.props.history.push(`/briefcard-templates/${this.props.auth._id}`)
        );
      }
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
          <button onClick={this.deleteBriefCardTemplate} className="btn red">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
    briefCardCon: state.briefcardTemplate.briefcardTemplateContent,
  };
}
export default connect(mapStateToProps, actions)(ShowBriefCardTemplate);
