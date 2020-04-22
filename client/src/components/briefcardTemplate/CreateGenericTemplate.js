import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/CreateGenericTemplate.css';
import SidebarTemplate from './SidebarTemplate';
import GetJob from './briefCardGoal/GetJob';
import BlockPage from './BlockPage';
import GetJob02 from './briefCardGoal/GetJob02';

class CreateGenericTemplate extends React.Component {
  state = {
    getJob: false,
    newClient: false,
    block: false,
    // Interest
    interest01: false,
    interest02: false,
    idInterest: '',
    // Profile
    profile01: false,
    profile02: false,
    idProfile: '',
    // Message
    message01: false,
    message02: false,
    idMessage: false,
    // Experience
    experience01: false,
    experience02: false,
    idExperience: '',
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
    this.setState({
      interest01: true,
      interest02: false,
      idInterest: 'BlockInterest01',
    });
  };
  displayBlockInterest02 = () => {
    this.setState({
      interest02: true,
      interest01: false,
      idInterest: 'BlockInterest02',
    });
  };
  // Profile
  displayBlockProfile01 = () => {
    this.setState({
      profile01: true,
      profile02: false,
      idProfile: 'BlockProfile01',
    });
  };
  displayBlockProfile02 = () => {
    this.setState({
      profile02: true,
      profile01: false,
      idProfile: 'BlockProfile02',
    });
  };
  // Message
  displayBlockMessage01 = () => {
    this.setState({
      message01: true,
      message02: false,
      idMessage: 'BlockMessage01',
    });
  };
  displayBlockMessage02 = () => {
    this.setState({
      message02: true,
      message01: false,
      idMessage: 'BlockMessage02',
    });
  };
  // Experience
  displayBlockExperience01 = () => {
    this.setState({
      experience01: true,
      experience02: false,
      idExperience: 'BlockExperience01',
    });
  };
  displayBlockExperience02 = () => {
    this.setState({
      experience02: true,
      experience01: false,
      idExperience: 'BlockExperience02',
    });
  };

  render() {
    return (
      <div className="fluid-container">
        <div className="row no-margin-bottom">
          <div className="col m3 s12 padding-none">
            <SidebarTemplate
              displayGetJob={this.displayGetJob}
              displayNewClient={this.displayNewClient}
              displayBlock={this.displayBlock}
              // Interest
              displayBlockInterest01={this.displayBlockInterest01}
              displayBlockInterest02={this.displayBlockInterest02}
              // Profile
              displayBlockProfile01={this.displayBlockProfile01}
              displayBlockProfile02={this.displayBlockProfile02}
              // Message
              displayBlockMessage01={this.displayBlockMessage01}
              displayBlockMessage02={this.displayBlockMessage02}
              // Experience
              displayBlockExperience01={this.displayBlockExperience01}
              displayBlockExperience02={this.displayBlockExperience02}
            />
          </div>
          <div className="col m9 s12">
            <div className="box-briefcard-template">
              {/* Get Job */}
              {this.state.getJob ? (
                <div>
                  <GetJob />
                </div>
              ) : (
                ''
              )}
              {/* New Client */}
              {this.state.newClient ? (
                <div>
                  <GetJob02 />
                </div>
              ) : (
                ''
              )}
              {/* Block */}
              {this.state.block ? (
                <BlockPage
                  // Interest
                  idInterest={this.state.idInterest}
                  interest01={this.state.interest01}
                  interest02={this.state.interest02}
                  // Profile
                  idProfile={this.state.idProfile}
                  profile01={this.state.profile01}
                  profile02={this.state.profile02}
                  // Message
                  idMessage={this.state.idMessage}
                  message01={this.state.message01}
                  message02={this.state.message02}
                  // Experience
                  idExperience={this.state.idExperience}
                  experience01={this.state.experience01}
                  experience02={this.state.experience02}
                />
              ) : (
                ''
              )}
            </div>
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
