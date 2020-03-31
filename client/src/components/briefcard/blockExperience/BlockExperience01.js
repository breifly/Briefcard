import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockExperience/BlockExperience01.css';
import EditExperience from './EditExperience';

class BlockExperience01 extends React.Component {
  state = {
    companies: [],
    position: [],
    dateStart: [],
    dateEnd: [],
    description: []
  };

  handleType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="be-01">
          <div className="card-experience">
            <i className="fas fa-city"></i>
            <div className="card-experience-infos">
              <h2>Apple</h2>
              <h3>
                Lawyer{' '}
                <span>
                  {2012} - {2020}
                </span>
              </h3>
              <p>
                Estate planning and litigation firm that specializes in
                international asset protection and litigation
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <EditExperience handleType={this.handleType} />
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
export default connect(mapStateToProps, actions)(BlockExperience01);
