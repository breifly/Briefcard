import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TemplateList from './TemplateList';

class Template extends React.Component {
  render() {
    return (
      <div className="white-text container">
        <div className="center white-text">
          <img
            className="img-empty"
            alt="empty"
            src={process.env.PUBLIC_URL + '/images/create.svg'}
          />
          <h5>Create your first BriefCard!</h5>
          <Link
            to="/create-breifcard"
            className="btn-floating btn-large waves-effect waves-light"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
        <TemplateList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}
export default connect(mapStateToProps, actions)(Template);
