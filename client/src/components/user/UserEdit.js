import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import renderField from './renderField';
import * as actions from '../actions';
import validate from './Validation';
import ModalForm from './ModalForm';

import normalizePhone from './normalizePhone';

class UserEdit extends React.Component {
  onDelete = () => {
    const id = this.props.auth._id;
    this.props.deleteUser(id, () => {
      this.props.history.push(`/`);
    });
  };

  render() {
    const { error, handleSubmit, submitting } = this.props;

    const onSubmit = formProps => {
      const id = this.props.auth._id;
      this.props.editUser(id, formProps, () => {
        this.props.history.push(`/user/${id}`);
      });
    };

    return (
      <div className="container">
        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col m6 s12">
                <div className="input-field">
                  <Field
                    name="firstName"
                    type="text"
                    component={renderField}
                    placeholder="First name"
                    label="First name"
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
                    placeholder="Last name"
                    label="Last name"
                    icon="account_circle"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col m6 s12">
                <div className="input-field">
                  <Field
                    name="description"
                    type="text"
                    component={renderField}
                    label="Description"
                    icon="description"
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
            </div>
            {error && <strong>{error}</strong>}
            <div className="center">
              <button
                type="submit"
                disabled={submitting}
                className="waves-effect waves-light btn btn-signin"
              >
                Edit User
              </button>
            </div>
          </form>
        </div>
        <ModalForm onDelete={this.onDelete} />
      </div>
    );
  }
}

function mapStateToPros(state) {
  return {
    auth: state.auth.authenticated
  };
}

export default compose(
  connect(mapStateToPros, actions),
  reduxForm({ form: 'userEdit', validate })
)(UserEdit);
