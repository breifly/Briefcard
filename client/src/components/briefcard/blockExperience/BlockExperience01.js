import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockExperience/BlockExperience01.css';
import AddExperience from './AddExperience';
import EditExperience from './EditExperience';

class BlockExperience01 extends React.Component {
  state = {
    editCompany: '',
    editPosition: '',
    editDateStart: '',
    editDateEnd: '',
    editDescription: '',

    company: '',
    position: '',
    dateStart: '',
    dateEnd: '',
    description: '',
    errorMEssage: '',
    experiences: [
      {
        company: 'Apple Store',
        position: 'Sales',
        dateStart: '2016',
        dateEnd: '2020',
        description:
          'Apple Inc. is an American multinational technology company headquartered in Cupertino, California'
      }
    ]
  };

  handleType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitAdd = e => {
    if (
      this.state.company !== '' &&
      this.state.position !== '' &&
      this.state.dateStart !== '' &&
      this.state.dateEnd !== '' &&
      this.state.description !== ''
    ) {
      this.setState({
        experiences: [
          ...this.state.experiences,
          {
            company: this.state.company,
            position: this.state.position,
            dateStart: this.state.dateStart,
            dateEnd: this.state.dateEnd,
            description: this.state.description
          }
        ],
        errorMessage: '',
        company: '',
        position: '',
        dateStart: '',
        dateEnd: '',
        description: ''
      });
    } else {
      this.setState({
        errorMessage: 'Missing field to complete',
        modalClose: ''
      });
    }
  };

  editExperience = idx => {
    console.log(this.state.experiences[idx].company);
    if (this.state.editCompany) {
      this.state.experiences[idx].company = this.state.editCompany;
    }
    if (this.state.editPosition) {
      this.state.experiences[idx].position = this.state.editPosition;
    }
    if (this.state.editDateStart) {
      this.state.experiences[idx].dateStart = this.state.editDateStart;
    }
    if (this.state.editDateEnd) {
      this.state.experiences[idx].dateEnd = this.state.editDateEnd;
    }
    if (this.state.editDescription) {
      this.state.experiences[idx].description = this.state.editDescription;
    }
    this.forceUpdate();
    this.setState({
      editCompany: '',
      editPosition: '',
      editDateStart: '',
      editDateEnd: '',
      editDescription: ''
    });
  };

  renderExperience = () => {
    if (this.state.experiences.length)
      return this.state.experiences.map((exp, idx) => {
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
                <p>{exp.description}</p>
                <EditExperience
                  index={idx}
                  editExperience={this.editExperience}
                  handleType={this.handleType}
                  editCompany={this.state.editCompany}
                  editPosition={this.state.editPosition}
                  editDateStart={this.state.editDateStart}
                  editDateEnd={this.state.editDateEnd}
                  editDescription={this.state.editDescription}
                />
              </div>
            </div>
          </div>
        );
      });
  };

  render() {
    const { experiences } = this.state;
    console.log(experiences);
    return (
      <div className="row">
        {this.renderExperience(experiences)}
        <div className="right">
          <AddExperience
            onSubmitAdd={this.onSubmitAdd}
            handleType={this.handleType}
            errorMessage={this.state.errorMessage}
            company={this.state.company}
            position={this.state.position}
            dateStart={this.state.dateStart}
            dateEnd={this.state.dateEnd}
            description={this.state.description}
          />
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
