import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import '../css/CreateGenericTemplate.css';

class CreateGenericTemplate extends React.Component {
  render() {
    return (
      <div className="white-text ">
        <h4 className="center"> CreateGenericTemplate</h4>
        <br></br>
        <div className="row">
          <div className="col m8 center">
            <h5>Profile Block</h5>
            <div className="col m4">
              <img
                alt="profile-complited"
                className="img-profile"
                src={
                  process.env.PUBLIC_URL + '/images/ProfileCard/profile1.png'
                }
              />
            </div>
            <div className="col m4">
              {' '}
              <img
                alt="profile-complited"
                className="img-profile"
                src={
                  process.env.PUBLIC_URL + '/images/ProfileCard/profile1.png'
                }
              />
            </div>
            <div className="col m4">
              {' '}
              <img
                alt="profile-complited"
                className="img-profile"
                src={
                  process.env.PUBLIC_URL + '/images/ProfileCard/profile1.png'
                }
              />
            </div>
          </div>
          <div className="col m4">
            <div className="list-block">
              <h5 className="center">List block</h5>
              <h6>Block Profile</h6>
              <div class="card-product">
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/ProfileCard/profile1.png'
                  }
                />
                <div class="card-product-infos">
                  <h2>Block profile save 1</h2>
                  <p>
                    Product description with <strong>relevant info</strong>{' '}
                    only.
                  </p>
                </div>
              </div>
            </div>
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
