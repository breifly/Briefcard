import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import M from 'materialize-css/dist/js/materialize.min.js';

class User extends React.Component {
  componentDidMount() {
    var elem = document.querySelectorAll('.carousel');
    M.Carousel.init(elem, {});
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/images/lechef.jpg'}
            alt="avatar"
          />
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
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
export default connect(mapStateToProps, actions)(User);
