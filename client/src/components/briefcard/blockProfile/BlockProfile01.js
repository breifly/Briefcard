import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockProfile/BlockProfile01.css';
import EditProfile from './EditProfile';
import 'react-chat-elements/dist/main.css';

class BlockProfile01 extends React.Component {
  state = {
    title: 'LeChef Otaku',
    job: 'Youtuber',
    email: 'lechef@gmail.com',
    phone: '786 234 4557',
    modal: false
  };

  openModal = () => {
    this.setState({ modal: true });
  };

  preSaveForm = form => {
    console.log(form);
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
                  <h5>{this.state.title}</h5>
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
          <EditProfile preSaveForm={this.preSaveForm} />
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
