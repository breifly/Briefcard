import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockMessage/BlockMessage01.css';
import EditMessage from './EditMessage';

class BlockMessage01 extends React.Component {
  render() {
    return (
      <div>
        <div className=" row right">
          {!this.props.briefcard ? (
            <EditMessage handleType={this.props.handleType} />
          ) : (
            ''
          )}
        </div>
        <div className="container">
          <div className="bm-01">
            Hey {this.props.title}! {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(BlockMessage01);
