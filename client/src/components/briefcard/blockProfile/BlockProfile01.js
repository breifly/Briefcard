import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockProfile/BlockProfile01.css';
import EditProfile from './EditProfile';

class BlockProfile01 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="right">
          <EditProfile handleType={this.props.handleType} />
        </div>
        <div className="bp-01">
          <div className="col m6">
            <div className="bp-01-block">
              <img
                alt="avatar"
                src={
                  this.props.auth.avatar ||
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
                <i className="fas fa-phone"></i>
              </p>
              <p>
                <i className="far fa-envelope"></i>
              </p>
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
export default connect(mapStateToProps, actions)(BlockProfile01);
