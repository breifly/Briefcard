import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BlockProfile01 from '../blockProfile/BlockProfile01';
import BlockMessage01 from '../blockMessage/BlockMessage01';
import BlockExperience01 from '../blockExperience/BlockExperience01';

class GetJob extends React.Component {
  render() {
    return (
      <div className="container">
        <BlockProfile01 />
        <BlockMessage01 />
        <BlockExperience01 />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}
export default connect(mapStateToProps, actions)(GetJob);
