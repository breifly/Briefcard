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
          <img
            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
            alt="background"
          />
        </div>

        <ul class="collapsible">
          <li>
            <div class="collapsible-header">
              <i class="material-icons">filter_drama</i>BriefCard Goal
            </div>
            <div class="collapsible-body">
              <div className="row">
                <div className="col m4">
                  <div onClick={this.props.displayGetJob} className="img-block">
                    <img
                      src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                      alt="background"
                    />
                    <p className="center white-text">Get Job</p>
                  </div>
                </div>
                <div onClick={this.props.displayNewClient} className="col m4">
                  <div className="img-block">
                    <img
                      src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                      alt="background"
                    />
                    <p className="center white-text">New Client</p>
                  </div>
                </div>
                <div className="col m4">
                  <div className="img-block">
                    <img
                      src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                      alt="background"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">place</i>Generic Template
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Block
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
