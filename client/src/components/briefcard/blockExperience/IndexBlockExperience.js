import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BlockExperience01 from './BlockExperience01';

class IndexBlockExperience extends React.Component {
  renderBlockExperience = () => {
    switch (this.props.idBlock) {
      case 'BlockExperience01':
        return (
          <BlockExperience01
            briefcard={this.props.briefcard}
            experiences={this.props.briefcard.experiences.experience}
          />
        );
      case 'BlockMessage02':
        return <div>hello block Message02</div>;
      default:
        return;
    }
  };
  render() {
    return (
      <div className="container-experience">{this.renderBlockExperience()}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(IndexBlockExperience);
