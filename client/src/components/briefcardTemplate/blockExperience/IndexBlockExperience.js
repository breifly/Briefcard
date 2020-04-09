import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BlockExperience01 from './BlockExperience01';

class IndexBlockExperience extends React.Component {
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

    experiences: this.props.briefcard.experiences.experience,
  };

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editExperience = (idx) => {
    const newExp = this.state.experiences.slice(); //copy the array
    if (this.state.editCompany) {
      newExp[idx].company = this.state.editCompany; //execute the manipulations
      this.setState({ experiences: newExp }); //set the new state
    }
    if (this.state.editPosition) {
      newExp[idx].position = this.state.editPosition; //execute the manipulations
      this.setState({ experiences: newExp }); //set the new state
    }
    if (this.state.editDateStart) {
      newExp[idx].dateStart = this.state.editDateStart; //execute the manipulations
      this.setState({ experiences: newExp }); //set the new state
    }
    if (this.state.editDateEnd) {
      newExp[idx].dateEnd = this.state.editDateEnd; //execute the manipulations
      this.setState({ experiences: newExp }); //set the new state
    }
    if (this.state.editDescription) {
      newExp[idx].description = this.state.editDescription; //execute the manipulations
      this.setState({ experiences: newExp }); //set the new state
    }

    const id = this.props.id;
    const form = {
      id: this.props.idBlock,
      experience: this.state.experiences,
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
  };

  onSubmitAdd = () => {
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
            description: this.state.description,
          },
        ],
        errorMessage: '',
        company: '',
        position: '',
        dateStart: '',
        dateEnd: '',
        description: '',
      });

      const id = this.props.id;
      const experience = {
        company: this.state.company,
        position: this.state.position,
        dateStart: this.state.dateStart,
        dateEnd: this.state.dateEnd,
        description: this.state.description,
      };
      // array
      const newExp = this.state.experiences.slice(); //copy the array
      newExp.push(experience); // push object inside array
      const form = {
        id: this.props.briefcard.experiences.id,
        experience: newExp,
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
    } else {
      this.setState({
        errorMessage: 'Missing field to complete',
        modalClose: '',
      });
    }
  };

  renderBlockExperience = () => {
    switch (this.props.idBlock) {
      case 'BlockExperience01':
        return (
          <BlockExperience01
            id={this.props.id}
            briefcard={this.props.briefcard}
            experiences={this.state.experiences}
            editExperience={this.editExperience}
            handleType={this.handleType}
            onSubmitAdd={this.onSubmitAdd}
            briefcardEdit={this.props.briefcardEdit}
          />
        );
      case 'BlockMessage02':
        return <div>hello block Message02</div>;
      default:
        return;
    }
  };
  render() {
    return (
      <div className="container-experience">{this.renderBlockExperience()}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(IndexBlockExperience);
