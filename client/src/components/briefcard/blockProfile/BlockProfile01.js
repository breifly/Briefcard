import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockProfile/BlockProfile01.css';
import EditProfile from './EditProfile';
import 'react-chat-elements/dist/main.css';

class BlockProfile01 extends React.Component {
  state = {
    firstName: 'leChef',
    lastName: 'Otaku',
    job: 'Youtuber',
    email: 'lechef@gmail.com',
    phone: '786 234 4557'
  };

  preSaveForm = event => {
    event.preventDefault();
  };

  handleType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="bp-01">
          <div className="col m6">
            <div className="bp-01-block">
              <img
                alt="avatar"
                src={process.env.PUBLIC_URL + '/images/lechef.jpg'}
              />
              <ul>
                <li>
                  <h5>
                    {this.state.firstName} {this.state.lastName}
                  </h5>
                </li>
                <li className="job">{this.state.job}</li>
                <li>{this.state.email}</li>
                <li>{this.state.phone}</li>
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
        <div className="right">
          <EditProfile handleType={this.handleType} />
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
