import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/TemplateList.css';

class TemplateList extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '10px' }} className="card-product">
        <img
          src={process.env.PUBLIC_URL + '/images/getJob.jpg'}
          alt="image01"
        />
        <div className="card-product-infos">
          <i class="fas fa-ellipsis-v right"></i>
          <h2>{this.props.briefcardTemplate.name}</h2>
          <p>{this.props.briefcardTemplate.description}</p>
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
