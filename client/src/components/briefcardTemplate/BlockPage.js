import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
// Interest
import BlockInterest01 from './blockInterest/BlockInterest01';
import BlockInterest02 from './blockInterest/BlockInterest02';
// Profile
import BlockProfile01 from './blockProfile/BlockProfile01';
import BlockProfile02 from './blockProfile/BlockProfile02';
// Message
import BlockMessage01 from './blockMessage/BlockMessage01';
import BlockMessage02 from './blockMessage/BlockMessage02';
// Experience
import BlockExperience01 from './blockExperience/BlockExperience01';
import BlockExperience02 from './blockExperience/BlockExperience02';

import EditNameTemplate from './EditNameTemplate';

class BlockPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      describe: '',
      // Block Profile
      firstName: 'John',
      lastName: 'Mackenzie',
      job: 'Youtuber',
      email: 'John@gmail.com',
      phone: '786 234 4557',
      // Note
      title: 'Bob',
      message:
        'glad we got a chance to sit at thatch. Almost missed you for the holidays! Till next time.',
      //Interest
      value: [],
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
    this.handleChangeInterest = this.handleChangeInterest.bind(this);
  }

  handleChangeInterest(event) {
    this.setState({
      value: Array.from(event.target.selectedOptions, (item) => item.value),
    });
  }

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

  saveBriefCardTemplate = () => {
    const form = {
      name: this.state.name,
      describe: this.state.describe,
      user: this.props.auth._id,
      profile: {
        id: this.props.idProfile,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        job: this.state.job,
        email: this.state.email,
        phone: this.state.phone,
        image: this.props.auth.avatar,
      },
      interest: {
        id: this.props.idInterest,
        interest: this.state.value,
      },
      note: {
        id: this.props.idMessage,
        title: this.state.title,
        message: this.state.message,
      },
      experiences: {
        id: this.props.idExperience,
        experience: this.state.experiences,
      },
    };
    this.props.createBriefCardTemplate(form, () =>
      this.props.history.push(`/briefcard-templates/${this.props.auth._id}`)
    );
  };
  render() {
    return (
      <div>
        <div className="">
          {/* Profile Block */}
          {this.props.profile01 ? (
            <BlockProfile01
              briefUser={this.props.auth._id}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              job={this.state.job}
              email={this.state.email}
              phone={this.state.phone}
              image={this.props.auth.avatar}
              handleType={this.handleType}
            />
          ) : (
            ''
          )}
          {this.props.profile02 ? (
            <BlockProfile02
              briefUser={this.props.auth._id}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              job={this.state.job}
              email={this.state.email}
              phone={this.state.phone}
              image={this.props.auth.avatar}
              handleType={this.handleType}
            />
          ) : (
            ''
          )}
          {/* Message Block */}
          {this.props.message01 ? (
            <BlockMessage01
              handleType={this.handleType}
              title={this.state.title}
              message={this.state.message}
              briefUser={this.props.auth._id}
            />
          ) : (
            ''
          )}
          {this.props.message02 ? (
            <BlockMessage02
              handleType={this.handleType}
              title={this.state.title}
              message={this.state.message}
              briefUser={this.props.auth._id}
            />
          ) : (
            ''
          )}
          {/* Interest Block */}
          {this.props.interest01 ? (
            <BlockInterest01
              briefUser={this.props.auth._id}
              value={this.state.value}
              handleChangeInterest={this.handleChangeInterest}
            />
          ) : (
            ''
          )}
          {this.props.interest02 ? (
            <BlockInterest02
              briefUser={this.props.auth._id}
              value={this.state.value}
              handleChangeInterest={this.handleChangeInterest}
            />
          ) : (
            ''
          )}
          {/* Experience Block */}
          {this.props.experience01 ? (
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
          ) : (
            ''
          )}
          {this.props.experience02 ? (
            <BlockExperience02
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
          ) : (
            ''
          )}
        </div>
        {this.props.idProfile ||
        this.props.idInterest ||
        this.props.idMessage ||
        this.props.idExperience ? (
          <EditNameTemplate
            name={this.state.name}
            describe={this.state.describe}
            handleType={this.handleType}
            saveBriefCardTemplate={this.saveBriefCardTemplate}
          />
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
export default withRouter(connect(mapStateToProps, actions)(BlockPage));
