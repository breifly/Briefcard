import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockExperience/BlockExperience01.css';
import EditExperience from './EditExperience';

class BlockExperience01 extends React.Component {
  state = {
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

  componentDidMount() {
    this.state.experiences.shift();
  }

  handleType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormReset = () => {
    this.setState(() => this.initialState);
  };

  onSubmitExperience = e => {
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

  renderExperience = experiences => {
    return experiences.map((exp, idx) => (
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
          </div>
        </div>
      </div>
    ));
  };

  render() {
    console.log(this.state.experiences);
    return (
      <div className="row">
        {this.renderExperience(this.state.experiences)}
        <div className="right">
          <EditExperience
            onSubmitExperience={this.onSubmitExperience}
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
