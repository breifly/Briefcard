import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockProfile/BlockProfile01.css';
import BlockProfile01 from './BlockProfile01';

class IndexBlockProfile extends React.Component {
  state = {
    firstName: this.props.briefcard.profile.firstName,
    lastName: this.props.briefcard.profile.lastName,
    job: this.props.briefcard.profile.job,
    email: this.props.briefcard.profile.email,
    phone: this.props.briefcard.profile.phone,
    image: this.props.briefcard.profile.image,
  };

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveProfile = (form) => {
    const id = this.props.id;
    form = {
      id: this.props.idBlock,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      job: this.state.job,
      email: this.state.email,
      phone: this.state.phone,
      image: this.state.image,
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

  renderBlockBrofile = () => {
    switch (this.props.idBlock) {
      case 'BlockProfile01':
        return (
          <BlockProfile01
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            job={this.state.job}
            email={this.state.email}
            phone={this.state.phone}
            image={this.state.image}
            handleType={this.handleType}
            saveProfile={this.saveProfile}
            briefUser={this.props.briefUser}
          />
        );
      case 'BlockProfile02':
        return <div>hello block 02</div>;
      default:
        return;
    }
  };
  render() {
    return <div>{this.renderBlockBrofile()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(IndexBlockProfile);
