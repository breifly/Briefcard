import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/Welcome.css';
import { Parallax } from 'react-materialize';
import '../css/Welcome.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Welcome extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };
  render() {
    return (
      <div>
        <div className="slide-home">
          <div className="container-welcome">
            <div className="row">
              <div className="col m6">
                <h2>
                  There's more to you<br></br> then a static profile.
                </h2>
                <Link className="btn-started" to={'/signin'}>
                  Get Started
                </Link>
              </div>
              <div className="col m6">
                <img
                  src={process.env.PUBLIC_URL + '/images/banner.png'}
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container center">
          <h4 className="title-buisness">
            All-in-one, all for business professionals.
          </h4>
          <div className="row">
            <div className="col m3">
              <img
                src={process.env.PUBLIC_URL + '/images/icon_Find_Work.png'}
                alt="find"
              />
              <p>Find Work</p>
              <p>Search or post jobs & local projects</p>
            </div>
            <div className="col m3">
              <img
                src={process.env.PUBLIC_URL + '/images/icon_Network.png'}
                alt="network"
              />
              <p>Network</p>
              <p>Simple & effective virtual networking</p>
            </div>
            <div className="col m3">
              <img
                src={process.env.PUBLIC_URL + '/images/icon_Personal_CRM.png'}
                alt="crm"
              />
              <p>Personal CRM</p>
              <p>Easily manage opportunities</p>
            </div>
            <div className="col m3">
              <img
                src={process.env.PUBLIC_URL + '/images/Close_Clients.png'}
                alt="client"
              />
              <p>Close Clients</p>
              <p>Personalize your marketing & approach</p>
            </div>
            {/* <div className="col m3">
              <img
                src={process.env.PUBLIC_URL + '/images/icon_Chat.png'}
                alt="find"
              />
              <p>Chat</p>
              <p>Cross-Platform Messaging</p>
            </div> */}
          </div>
        </div>
        <Parallax
          image={
            <img
              alt=""
              src={process.env.PUBLIC_URL + '/images/banner2.jpg'}
              className="last-banner"
            />
          }
          className="image-parallax hide-on-small-only"
          options={{
            responsiveThreshold: 0,
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(Welcome);
