import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockExperience/BlockExperience01.css';
import AddExperience from './AddExperience';
import EditExperience from './EditExperience';
import DeleteExperience from './DeleteExperience';

class BlockExperience01 extends React.Component {
  deleteExperience = idx => {
    console.log(idx);
    this.props.experiences.splice(idx, idx);
    this.forceUpdate();
  };
  renderExperience = () => {
    if (this.props.experiences.length)
      return this.props.experiences.map((exp, idx) => {
        return (
          <div key={idx} className="be-01">
            <div className="card-experience">
              <i className="fas fa-city"></i>
              <div className="card-experience-infos">
                <h2>{exp.company}</h2>
                <h3>
                  {exp.position}{' '}
                  <span>
                    {exp.dateStart} - {exp.dateEnd}
                  </span>
                </h3>
                <p>{exp.description} </p>
                {!this.props.briefcard ? (
                  <div className="right" style={{ display: 'flex' }}>
                    <EditExperience
                      index={idx}
                      editExperience={this.props.editExperience}
                      handleType={this.props.handleType}
                      editCompany={this.props.editCompany}
                      editPosition={this.props.editPosition}
                      editDateStart={this.props.editDateStart}
                      editDateEnd={this.props.editDateEnd}
                      editDescription={this.props.editDescription}
                    />
                    <DeleteExperience
                      idx={idx}
                      deleteExperience={this.deleteExperience}
                    />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        );
      });
  };

  render() {
    return (
      <div className="row">
        {this.renderExperience(this.props.experiences)}
        {!this.props.briefcard ? (
          <div className="right">
            <AddExperience
              onSubmitAdd={this.props.onSubmitAdd}
              handleType={this.props.handleType}
              errorMessage={this.props.errorMessage}
              company={this.props.company}
              position={this.props.position}
              dateStart={this.props.dateStart}
              dateEnd={this.props.dateEnd}
              description={this.props.description}
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
    auth: state.auth.authenticated
  };
}
export default connect(mapStateToProps, actions)(BlockExperience01);
