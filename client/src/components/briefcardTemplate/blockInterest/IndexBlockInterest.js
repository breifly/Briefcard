import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class IndexBlockInterest extends React.Component {
  render() {
    return <div>index interest</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(IndexBlockInterest);
