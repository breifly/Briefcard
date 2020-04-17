import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { Link } from 'react-router-dom';
import '../css/CreateGenericTemplate.css';
import SidebarTemplate from './SidebarTemplate';
import GetJob from './briefCardGoal/GetJob';
import BlockPage from './BlockPage';

class CreateGenericTemplate extends React.Component {
  state = {
    getJob: false,
    newClient: false,
    block: false,
    interest01: false,
    interest02: false,
  };

  displayGetJob = () => {
    this.setState({ getJob: true, newClient: false, block: false });
  };

  displayNewClient = () => {
    this.setState({ newClient: true, getJob: false, block: false });
  };
  // Block
  displayBlock = () => {
    this.setState({ block: true, getJob: false, newClient: false });
  };
  // Interest
  displayBlockInterest01 = () => {
    this.setState({ interest01: true, interest02: false });
  };
  displayBlockInterest02 = () => {
    this.setState({ interest02: true, interest01: false });
  };

  render() {
    return (
      <div className="fluid-container">
        <div className="row">
          <div className="col m3 s12 padding-none">
            <SidebarTemplate
              displayGetJob={this.displayGetJob}
              displayNewClient={this.displayNewClient}
              displayBlock={this.displayBlock}
              displayBlockInterest01={this.displayBlockInterest01}
              displayBlockInterest02={this.displayBlockInterest02}
            />
          </div>
          <div className="col m9 s12">
            {/* Get Job */}
            {this.state.getJob ? (
              <div>
                <GetJob />
              </div>
            ) : (
              ''
            )}
            {/* New Client */}
            {this.state.newClient ? <div>New Client</div> : ''}
            {/* Block */}
            {this.state.block ? (
              <BlockPage
                interest01={this.state.interest01}
                interest02={this.state.interest02}
              />
            ) : (
              ''
            )}
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
export default connect(mapStateToProps, actions)(CreateGenericTemplate);
