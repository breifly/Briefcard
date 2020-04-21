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
            src={process.env.PUBLIC_URL + '/images/background-brief.jpg'}
            alt="background"
          />
        </div>

        <ul className="collapsible">
          <li>
            <div className="collapsible-header">Build from Templates</div>
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
          {/* Generic template */}
          {/* <li>
            <div className="collapsible-header">
              <i className="material-icons">place</i>Generic Template
            </div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li> */}
          {/* Block */}
          <li>
            <div
              className="collapsible-header"
              onClick={this.props.displayBlock}
            >
              Build from Block
            </div>
            <div className="collapsible-body padding-none">
              <ul className="collapsible">
                {/* profile */}
                <li>
                  <div
                    style={{ paddingLeft: '70px' }}
                    className="collapsible-header"
                  >
                    <i className="material-icons">place</i>Profile
                  </div>
                  <div className="collapsible-body">
                    <div className="row">
                      <div className="col m4">
                        <div
                          onClick={this.props.displayBlockProfile01}
                          className="img-block"
                        >
                          <img
                            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                            alt="background"
                          />
                          <p className="center white-text">profile 01</p>
                        </div>
                      </div>
                      <div className="col m4">
                        <div
                          onClick={this.props.displayBlockProfile02}
                          className="img-block"
                        >
                          <img
                            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                            alt="background"
                          />
                          <p className="center white-text">profile 02</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Message */}
                <li>
                  <div
                    style={{ paddingLeft: '70px' }}
                    className="collapsible-header"
                  >
                    <i className="material-icons">whatshot</i>Message
                  </div>
                  <div className="collapsible-body">
                    <div className="row">
                      <div className="col m4">
                        <div
                          onClick={this.props.displayBlockMessage01}
                          className="img-block"
                        >
                          <img
                            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                            alt="background"
                          />
                          <p className="center white-text">message 01</p>
                        </div>
                      </div>
                      <div className="col m4">
                        <div
                          onClick={this.props.displayBlockMessage02}
                          className="img-block"
                        >
                          <img
                            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                            alt="background"
                          />
                          <p className="center white-text">message 02</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
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
                          <p className="center white-text">Interest 02</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Experience */}
                <li>
                  <div
                    className="collapsible-header"
                    style={{ paddingLeft: '70px' }}
                  >
                    <i className="material-icons">whatshot</i>
                    Experience
                  </div>
                  <div className="collapsible-body">
                    <div className="row">
                      <div className="col m4">
                        <div
                          onClick={this.props.displayBlockExperience01}
                          className="img-block"
                        >
                          <img
                            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                            alt="background"
                          />
                          <p className="center white-text">Experience 01</p>
                        </div>
                      </div>
                      <div className="col m4">
                        <div
                          onClick={this.props.displayBlockExperience02}
                          className="img-block"
                        >
                          <img
                            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
                            alt="background"
                          />
                          <p className="center white-text">Experience 02</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="block-info-sidebar">
          <h6 className="center">How to make a BriefCard:</h6>
          <ol>
            <li>Choose a template or a set of blocks</li>
            <li>Complete with all the relevant general information</li>
            <li>Save your Template</li>
          </ol>
          <p>
            Congrats!<br></br>You will now be able to personnalize and send a
            briefcard in 30 seconds or less!
          </p>
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
export default connect(mapStateToProps, actions)(sidebarTemplate);
