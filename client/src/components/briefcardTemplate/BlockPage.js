import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import BlockInterest01 from './blockInterest/BlockInterest01';
import BlockInterest02 from './blockInterest/BlockInterest02';
import BlockProfile01 from './blockProfile/BlockProfile01';
class BlockPage extends React.Component {
  state = {
    // Block Profile
    firstName: 'John',
    lastName: 'Mackenzie',
    job: 'Youtuber',
    email: 'John@gmail.com',
    phone: '786 234 4557',
  };

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
  render() {
    return (
      <div>
        <h4 className="center">Block Page Custom</h4>
        <div className="container">
          {/* Interest Profile */}
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
          {/* Interest Block */}
          {this.props.interest01 ? <BlockInterest01 /> : ''}
          {this.props.interest02 ? <BlockInterest02 /> : ''}
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
export default connect(mapStateToProps, actions)(BlockPage);
