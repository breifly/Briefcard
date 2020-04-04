import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockProfile/BlockProfile01.css';
import BlockProfile01 from './BlockProfile01';

class IndexBlockProfile extends React.Component {
  renderBlockBrofile = () => {
    switch (this.props.idBlock) {
      case 'BlockProfile01':
        return (
          <BlockProfile01
            briefcard={this.props.briefcard}
            firstName={this.props.briefcard.profile.firstName}
            lastName={this.props.briefcard.profile.lastName}
            job={this.props.briefcard.profile.job}
            email={this.props.briefcard.profile.email}
            phone={this.props.briefcard.profile.phone}
          />
        );
      case 'BlockProfile02':
        return <div>hello block 02</div>;
      default:
        return;
    }
  };
  render() {
    return <div>{this.renderBlockBrofile()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}
export default connect(mapStateToProps, actions)(IndexBlockProfile);
