import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockMessage/BlockMessage01.css';
import EditMessage from './EditMessage';

class BlockMessage01 extends React.Component {
  render() {
    return (
      <div>
        {this.props.briefUser === this.props.auth._id ? (
          <div className=" row right">
            <EditMessage
              handleType={this.props.handleType}
              saveMessage={this.props.saveMessage}
            />
          </div>
        ) : (
          ''
        )}
        <div className="container">
          <div className="bm-01">{this.props.message}</div>
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
