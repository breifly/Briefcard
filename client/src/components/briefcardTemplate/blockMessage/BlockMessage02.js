import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockMessage/BlockMessage01.css';
import EditMessage from './EditMessage';

class BlockMessage02 extends React.Component {
  render() {
    return (
      <div>
        Block Message 02
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
export default connect(mapStateToProps, actions)(BlockMessage02);
