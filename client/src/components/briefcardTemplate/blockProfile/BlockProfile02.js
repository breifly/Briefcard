import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockProfile/BlockProfile01.css';
import EditProfile from './EditProfile';

class BlockProfile02 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="bp-01">
          <h6>Block profile 02</h6>
          <div className="col m6">
            <div className="bp-01-block">
              <img
                alt="avatar"
                src={
                  this.props.image ||
                  process.env.PUBLIC_URL + '/images/lechef.jpg'
                }
              />
              <ul>
                <li>
                  <h5>
                    {this.props.firstName} {this.props.lastName}
                  </h5>
                </li>
                <li className="job">{this.props.job}</li>
                <li>{this.props.email}</li>
                <li>{this.props.phone}</li>
              </ul>
            </div>
          </div>
          <div className="col m6">
            <div className="bp-01-block-02 right">
              <p>
                <a style={{ color: 'white' }} href={`tel:${this.props.phone}`}>
                  <i className="fas fa-phone"></i>
                </a>
              </p>
              <p>
                <a
                  style={{ color: 'white' }}
                  href={`mailto:${this.props.email}`}
                >
                  <i className="far fa-envelope"></i>
                </a>
              </p>
            </div>
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
