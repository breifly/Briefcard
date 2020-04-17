import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class BlockInterest01 extends React.Component {
  render() {
    return <div>Block interest 02</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(BlockInterest01);
