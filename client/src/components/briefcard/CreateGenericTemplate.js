import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { Link } from 'react-router-dom';
import '../css/CreateGenericTemplate.css';
import SidebarTemplate from './SidebarTemplate';

class CreateGenericTemplate extends React.Component {
  state = {
    getJob: false,
    newClient: false
  };

  displayGetJob = () => {
    this.setState({ getJob: true, newClient: false });
  };

  displayNewClient = () => {
    this.setState({ newClient: true, getJob: false });
  };

  render() {
    return (
      <div className="fluid-container">
        <div className="row">
          <div className="col m3 s12 padding-none">
            <SidebarTemplate
              displayGetJob={this.displayGetJob}
              displayNewClient={this.displayNewClient}
            />
          </div>
          <div className="col m9 s12">
            {this.state.getJob ? (
              <div>
                <h2>Get Job</h2>
              </div>
            ) : (
              ''
            )}
            {this.state.newClient ? <div>New Client</div> : ''}
          </div>
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
export default connect(mapStateToProps, actions)(CreateGenericTemplate);
