import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/SidebarTemplate.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class sidebarTemplate extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }
  render() {
    return (
      <div className="sidebar-template">
        <div class="sidebar-background">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
        </div>

        <ul class="collapsible">
          <li>
            <div class="collapsible-header">
              <i class="material-icons">filter_drama</i>First
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">place</i>Second
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Third
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}
export default connect(mapStateToProps, actions)(sidebarTemplate);
