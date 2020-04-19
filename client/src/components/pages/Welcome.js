import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
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
                <div className="block-banner">
                  <h2>
                    There's more to you<br></br> then a static profile.
                  </h2>
                  <Link className="btn-started" to={'/signin'}>
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="col m6">
                <img
                  className="img-welcome"
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
          <div className="banner-2">
            <div className="row">
              <div className="col m3 s12">
                <img
                  src={process.env.PUBLIC_URL + '/images/Icon_Find_Work.png'}
                  alt="find"
                />
                <p>Find Work</p>
                <p>Search or post jobs & local projects</p>
              </div>
              <div className="col m3 s12">
                <img
                  src={process.env.PUBLIC_URL + '/images/Icon_Network.png'}
                  alt="network"
                />
                <p>Network</p>
                <p>Simple & effective virtual networking</p>
              </div>
              <div className="col m3 s12">
                <img
                  src={process.env.PUBLIC_URL + '/images/Icon_Personal_CRM.png'}
                  alt="crm"
                />
                <p>Personal CRM</p>
                <p>Easily manage opportunities</p>
              </div>
              <div className="col m3 s12">
                <img
                  src={process.env.PUBLIC_URL + '/images/Close_Clients.png'}
                  alt="client"
                />
                <p>Close Clients</p>
                <p>Personalize your marketing & approach</p>
              </div>
            </div>
          </div>
          <Link className="btn-banner2" to={'/signin'}>
            sign up for free
          </Link>
          <h4 className="title-buisness2">
            BriefCards are digital portfolios that are optimized for each unique
            opportunity
          </h4>
          <h5>How does it work?</h5>
          <div className="row">
            <div className="col m5">
              <img
                className="opportunity"
                src={
                  process.env.PUBLIC_URL + '/images/Opportunity_After_Image.png'
                }
                alt="banner"
              />
            </div>
            <div className="col m2 s12 vs">
              <h4>VS</h4>
            </div>
            <div className="col m5">
              <img
                className="opportunity"
                src={
                  process.env.PUBLIC_URL + '/images/Oppotunity_Before_Image.png'
                }
                alt="banner"
              />
            </div>
          </div>
        </div>
        <div className="newletter">
          <div className="container center">
            <h4>Beta lauch - Fall 2020</h4>
            <p>Get an invite for the limited beta launch!</p>
            <a className="email-send" href="mailto:webmaster@example.com">
              Click Here
            </a>

            <div className="newletter-signup">
              <Link to={'/signup'}>sign up now for free</Link>
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
export default connect(mapStateToProps, actions)(Welcome);
