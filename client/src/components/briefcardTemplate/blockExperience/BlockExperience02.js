import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockExperience/BlockExperience02.css';
import AddExperience from './AddExperience';
import EditExperience from './EditExperience';
import DeleteExperience from './DeleteExperience';

class BlockExperience02 extends React.Component {
  deleteExperience = (idx) => {
    this.props.experiences.splice(idx, idx);
    this.forceUpdate();

    // from briefcard and briefcard template
    if (this.props.briefcard) {
      const id = this.props.id;
      const form = {
        id: this.props.briefcard.experiences.id,
        experience: this.props.experiences,
      };

      if (this.props.briefcardEdit) {
        // edit from briefCard
        this.props.editBriefCard(id, form, () =>
          this.props.getBriefCard(this.props.id)
        );
      } else {
        // edit from briefCard Template
        this.props.editBriefCardTemplate(id, form, () =>
          this.props.getBriefCardTemplate(this.props.id)
        );
      }
    }
  };
  renderExperience = () => {
    if (this.props.experiences.length)
      return this.props.experiences.map((exp, idx) => {
        return (
          <div key={idx} className="be-01">
            <div className="card-experience">
              <div className="block-experience02">
                <i className="fas fa-city"></i>
              </div>

              <div className="card-experience-infos02">
                {this.props.briefUser === this.props.auth._id ? (
                  <div
                    className="right edit-exp-02"
                    style={{ display: 'flex' }}
                  >
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
                <h2>{exp.company}</h2>
                <h3>
                  {exp.position}{' '}
                  <span>
                    {exp.dateStart} - {exp.dateEnd}
                  </span>
                </h3>
                <p>{exp.description} </p>
              </div>
            </div>
          </div>
        );
      });
  };

  render() {
    return (
      <div className="row">
        {this.renderExperience()}
        {this.props.briefUser === this.props.auth._id ? (
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
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(BlockExperience02);
