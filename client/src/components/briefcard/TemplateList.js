import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/TemplateList.css';

class TemplateList extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '10px' }} className="card-product">
        <img
          src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
          alt="image01"
        />
        <div className="card-product-infos">
          <h2>Product name</h2>
          <p>
            Product description with <strong>relevant info</strong> only.
          </p>
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
export default connect(mapStateToProps, actions)(TemplateList);
