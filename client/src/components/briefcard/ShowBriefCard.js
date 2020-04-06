import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import IndexBlockProfile from './blockProfile/IndexBlockProfile';
import IndexBlockMessage from './blockMessage/IndexBlockMessage';
import IndexBlockExperience from './blockExperience/IndexBlockExperience';

class ShowBriefCard extends React.Component {
  componentDidMount() {
    this.props.getBriefCard(this.props.match.params.id);
  }

  renderBlockProfile = () => {
    if (this.props.briefCardCon) {
      return this.props.briefCardCon.map((brief) => {
        if (brief.profile)
          return (
            <IndexBlockProfile
              key={brief._id}
              briefcard={brief}
              idBlock={brief.profile.id}
            />
          );
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
            />
          );
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
            />
          );
      });
    }
  };

  render() {
    return (
      <div className="container">
        {this.renderBlockProfile()}
        {this.renderBlockMessage()}
        {this.renderBlockExperience()}
        {
          <Link to={`/briefcard/edit/${this.props.match.params.id}`}>
            <button className="btn edit-briefcard right">Edit</button>
          </Link>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    briefCardCon: state.briefcard.briefCardContent,
  };
}
export default connect(mapStateToProps, actions)(ShowBriefCard);
