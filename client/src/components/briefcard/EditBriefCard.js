import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validate from './Validation';
import renderField from './renderField';
import * as actions from '../actions';
import normalizePhone from './normalizePhone';

class EditBriefCard extends React.Component {
  componentDidMount() {
    this.props.getBriefCard(this.props.match.params.id);
  }
  // Render EditProfile
  renderEditFieldProfile = () => {
    if (this.props.briefCardCon)
      return this.props.briefCardCon.map((brief) => {
        if (brief.profile)
          return (
            <div key={brief._id}>
              <h4>Profile</h4>
              <div className="col m6 s12">
                <div className="input-field">
                  <Field
                    name="firstName"
                    type="text"
                    component={renderField}
                    label={brief.profile.firstName}
                    icon="account_circle"
                  />
                </div>
              </div>
              <div className="col m6 s12">
                <div className="input-field">
                  <Field
                    name="lastName"
                    type="text"
                    component={renderField}
                    label={brief.profile.lastName}
                    icon="account_circle"
                  />
                </div>
              </div>
              <div className="col m6 s12">
                <div className="input-field">
                  <Field
                    name="job"
                    type="text"
                    component={renderField}
                    label={brief.profile.job}
                    icon="account_circle"
                  />
                </div>
              </div>
              <div className="col m6 s12">
                <div className="input-field">
                  <Field
                    name="phone"
                    type="tel"
                    component={renderField}
                    normalize={normalizePhone}
                    label="786-212-2947"
                    icon="phone"
                  />
                </div>
              </div>
              <div className="col m6 s12">
                <div className="input-field">
                  <Field
                    name="phone"
                    type="tel"
                    component={renderField}
                    normalize={normalizePhone}
                    label={brief.profile.email}
                    icon="email"
                  />
                </div>
              </div>
            </div>
          );
      });
  };

  // Render EditMessage
  renderEditFieldMessage = () => {
    if (this.props.briefCardCon)
      return this.props.briefCardCon.map((brief) => {
        if (brief.note)
          return (
            <div key={brief._id}>
              <h4>Message</h4>
              <div className="col m6 s12">
                <div className="input-field">
                  <Field
                    name="title"
                    type="text"
                    component={renderField}
                    label={brief.note.title}
                    icon="account_circle"
                  />
                </div>
              </div>
              <div className="col m6 s12">
                <div className="input-field">
                  <Field
                    name="message"
                    type="text"
                    component={renderField}
                    label={brief.note.message}
                    icon="account_circle"
                  />
                </div>
              </div>
            </div>
          );
      });
  };

  // Render EditMessage
  renderEditFieldExperiences = () => {
    if (this.props.briefCardCon)
      return this.props.briefCardCon.map((brief) => {
        if (brief.experiences)
          for (let i = 0; i < brief.experiences.experience.length; i++) {
            return (
              <div key={brief._id}>
                <h4>Experiences</h4>
                <div className="col m6 s12">
                  <div className="input-field">
                    <Field
                      name="company"
                      type="text"
                      component={renderField}
                      label={brief.experiences.experience[i].company}
                      icon="account_circle"
                    />
                  </div>
                </div>
                <div className="col m6 s12">
                  <div className="input-field">
                    <Field
                      name="position"
                      type="text"
                      component={renderField}
                      label={brief.experiences.experience[i].position}
                      icon="account_circle"
                    />
                  </div>
                </div>
                <div className="col m6 s12">
                  <div className="input-field">
                    <Field
                      name="dateStart"
                      type="text"
                      component={renderField}
                      label={brief.experiences.experience[i].dateStart}
                      icon="account_circle"
                    />
                  </div>
                </div>
                <div className="col m6 s12">
                  <div className="input-field">
                    <Field
                      name="dateEnd"
                      type="text"
                      component={renderField}
                      label={brief.experiences.experience[i].dateEnd}
                      icon="account_circle"
                    />
                  </div>
                </div>
                <div className="col m6 s12">
                  <div className="input-field">
                    <Field
                      name="description"
                      type="text"
                      component={renderField}
                      label={brief.experiences.experience[i].description}
                    />
                  </div>
                </div>
              </div>
            );
          }
      });
  };

  render() {
    const { error, handleSubmit, submitting } = this.props;

    const onSubmit = (formProps) => {
      const id = this.props.auth._id;
      console.log(formProps);
      // const form = {
      //   firstName: formProps.firstName,
      //   lastName: formProps.lastName,
      //   description: formProps.description,
      //   phone: formProps.phone,
      //   avatar: this.state.image || this.props.auth.avatar,
      // };

      // this.props.editUser(id, form, () => {
      //   this.props.history.push(`/user/${id}`);
      // });
    };

    return (
      <div className="container">
        <div className="card">
          <h4 className="center">Edit Your BriefCard</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">{this.renderEditFieldProfile()}</div>
            <div className="row">{this.renderEditFieldMessage()}</div>
            <div className="row">{this.renderEditFieldExperiences()}</div>
            <div className="center">
              <button
                type="submit"
                disabled={submitting}
                className="waves-effect waves-light btn btn-signin"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToPros(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    briefCardCon: state.briefcard.briefCardContent,
  };
}

export default compose(
  connect(mapStateToPros, actions),
  reduxForm({ form: 'EditBriefCard', validate })
)(EditBriefCard);
