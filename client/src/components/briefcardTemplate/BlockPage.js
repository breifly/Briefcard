import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import BlockInterest01 from './blockInterest/BlockInterest01';
import BlockInterest02 from './blockInterest/BlockInterest02';
class BlockPage extends React.Component {
  render() {
    return (
      <div>
        <h4 className="center">Block Page Custom</h4>
        {/* Interest Block */}
        {this.props.interest01 ? <BlockInterest01 /> : ''}
        {this.props.interest02 ? <BlockInterest02 /> : ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(BlockPage);
