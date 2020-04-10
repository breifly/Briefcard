import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BlockProfile01 from '../blockProfile/BlockProfile01';
import BlockMessage01 from '../blockMessage/BlockMessage01';
import BlockExperience01 from '../blockExperience/BlockExperience01';
import { withRouter } from 'react-router-dom';
import EditNameTemplate from '../EditNameTemplate';

class GetJob extends React.Component {
  state = {
    // name and describ
    name: '',
    describe: '',
    // Block Profile
    firstName: 'John',
    lastName: 'Mackenzie',
    job: 'Youtuber',
    email: 'John@gmail.com',
    phone: '786 234 4557',
    // Block Message
    title: 'Bob',
    message:
      'glad we got a chance to sit at thatch. Almost missed you for the holidays! Till next time.',
    // Blobk Experience
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
          'Apple Inc. is an American multinational technology company headquartered in Cupertino, California',
      },
    ],
  };

  saveBriefCardTemplate = () => {
    const form = {
      name: this.state.name,
      describe: this.state.describe,
      user: this.props.auth._id,
      profile: {
        id: 'BlockProfile01',
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        job: this.state.job,
        email: this.state.email,
        phone: this.state.phone,
        image: this.props.auth.avatar,
      },
      note: {
        id: 'BlockMessage01',
        title: this.state.title,
        message: this.state.message,
      },
      experiences: {
        id: 'BlockExperience01',
        experience: this.state.experiences,
      },
    };
    this.props.createBriefCardTemplate(form, () =>
      this.props.history.push(`/briefcard-templates/${this.props.auth._id}`)
    );
  };

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitAdd = (e) => {
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
    } else {
      this.setState({
        errorMessage: 'Missing field to complete',
        modalClose: '',
      });
    }
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
    this.setState({
      editCompany: '',
      editPosition: '',
      editDateStart: '',
      editDateEnd: '',
      editDescription: '',
    });
  };

  render() {
    return (
      <div className="container">
        <BlockProfile01
          handleType={this.handleType}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          job={this.state.job}
          email={this.state.email}
          phone={this.state.phone}
          image={this.props.auth.avatar}
          briefUser={this.props.auth._id}
        />
        <BlockMessage01
          handleType={this.handleType}
          title={this.state.title}
          message={this.state.message}
          briefUser={this.props.auth._id}
        />
        <BlockExperience01
          editExperience={this.editExperience}
          onSubmitAdd={this.onSubmitAdd}
          handleType={this.handleType}
          experiences={this.state.experiences}
          errorMessage={this.state.errorMessage}
          company={this.state.company}
          position={this.state.position}
          dateStart={this.state.dateStart}
          dateEnd={this.state.dateEnd}
          description={this.state.description}
          editCompany={this.state.editCompany}
          editPosition={this.state.editPosition}
          editDateStart={this.state.editDateStart}
          editDateEnd={this.state.editDateEnd}
          editDescription={this.state.editDescription}
          briefUser={this.props.auth._id}
        />
        <EditNameTemplate
          name={this.state.name}
          describe={this.state.name}
          handleType={this.handleType}
          saveBriefCardTemplate={this.saveBriefCardTemplate}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default withRouter(connect(mapStateToProps, actions)(GetJob));
