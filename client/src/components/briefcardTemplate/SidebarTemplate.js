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
        <div className="sidebar-background">
          <img
            style={{ height: '100px' }}
            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
            alt="background"
          />
        </div>

        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">filter_drama</i>BriefCard Goal
            </div>
            <div className="collapsible-body">
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
            <div className="collapsible-header">
              <i className="material-icons">place</i>Generic Template
            </div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          {/* Block */}
          <li>
            <div
              className="collapsible-header"
              onClick={this.props.displayBlock}
            >
              <i className="material-icons">whatshot</i>Block
            </div>
            <div className="collapsible-body padding-none">
              <ul className="collapsible">
                {/* Interest */}
                <li>
                  <div
                    className="collapsible-header"
                    style={{ paddingLeft: '70px' }}
                  >
                    <i className="material-icons">whatshot</i>
                    Interest
                  </div>
                  <div className="collapsible-body">
                    <div className="row">
                      <div className="col m4">
                        <div
                          onClick={this.props.displayBlockInterest01}
                          className="img-block"
                        >
                          <img
                            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                            alt="background"
                          />
                          <p className="center white-text">Interest 01</p>
                        </div>
                      </div>
                      <div className="col m4">
                        <div
                          onClick={this.props.displayBlockInterest02}
                          className="img-block"
                        >
                          <img
                            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                            alt="background"
                          />
                          <p className="center white-text">Interest 01</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ paddingLeft: '70px' }}
                    className="collapsible-header"
                  >
                    <i className="material-icons">place</i>Second
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div
                    style={{ paddingLeft: '70px' }}
                    className="collapsible-header"
                  >
                    <i className="material-icons">whatshot</i>Third
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(sidebarTemplate);
