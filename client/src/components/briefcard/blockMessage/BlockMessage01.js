import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockMessage/BlockMessage01.css';
import EditMessage from '../blockMessage/EditMessage';

class BlockMessage01 extends React.Component {
  state = {
    title: 'Hey Bob!',
    message:
      'glad we got a chance to sit at thatch. Almost missed you for the holidays! Till next time.'
  };

  handleType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="bm-01">
            {this.state.title} {this.state.message}
          </div>
        </div>
        <div className=" row right">
          <EditMessage handleType={this.handleType} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}
export default connect(mapStateToProps, actions)(BlockMessage01);
