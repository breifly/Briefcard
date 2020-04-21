import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Discover from '../discover/Discover';
import { Link } from 'react-router-dom';
import '../css/Dashboard.css';

class Dashboard extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh' }} className="container">
        <div>
          <h4 style={{ marginTop: '20px' }} className="center">
            Time To Discover
          </h4>
          <p style={{ margin: '20px' }} className="center">
            Swipe through relevant projects, jobs, and other opportunities!
          </p>
        </div>
        {this.props.auth.firstName &&
        this.props.auth.lastName &&
        this.props.auth.avatar ? (
          <div>
            <Discover />
          </div>
        ) : (
          <div
            style={{ fontSize: '18px', marginTop: '40px' }}
            className="center"
          >
            <Link
              className="btn-config hoverable"
              to={`/user/${this.props.auth._id}`}
            >
              Configure your account to get started!
            </Link>
            <img
              className="complete-profile"
              alt="profile-complited"
              src={process.env.PUBLIC_URL + '/images/profile.svg'}
            />
            {/* <i className="fas fa-exclamation-circle"></i> You must complete your
            profile before swiping (Firstname, Lastname, Photo...) */}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(Dashboard);
