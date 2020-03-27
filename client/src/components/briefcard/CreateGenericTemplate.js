import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { Link } from 'react-router-dom';
import '../css/CreateGenericTemplate.css';
import SidebarTemplate from './SidebarTemplate';

class CreateGenericTemplate extends React.Component {
  render() {
    return (
      <div className="fluid-container">
        <div className="row">
          <div className="col m3 s12 padding-none">
            <SidebarTemplate />
          </div>
          <div>bob</div>
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
