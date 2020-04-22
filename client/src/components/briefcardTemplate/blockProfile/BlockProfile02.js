import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockProfile/BlockProfile02.css';
import EditProfile from './EditProfile';

class BlockProfile02 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="bp-02">
          <div className="col m12 s12 center">
            <img
              alt="avatar"
              src={
                this.props.image ||
                process.env.PUBLIC_URL + '/images/lechef.jpg'
              }
            />
            <ul>
              <li>
                <a
                  className=" icon-profile"
                  style={{ color: '#2f2f2f' }}
                  href={`tel:${this.props.phone}`}
                >
                  <i className="fas fa-phone"></i>
                </a>
                <a
                  className=" icon-profile"
                  style={{ color: '#2f2f2f' }}
                  href={`mailto:${this.props.email}`}
                >
                  <i className="far fa-envelope"></i>
                </a>
              </li>
              <li>
                <h5>
                  {this.props.firstName} {this.props.lastName}
                </h5>
              </li>
              <li className="job-profile-02">{this.props.job}</li>
            </ul>
          </div>
        </div>
        {this.props.briefUser === this.props.auth._id ? (
          <div className="right">
            <EditProfile
              handleType={this.props.handleType}
              saveProfile={this.props.saveProfile}
            />
          </div>
        ) : (
          ''
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
export default connect(mapStateToProps, actions)(BlockProfile02);
