import React from 'react';
import '../../css/blockProfile/EditProfile.css';
import { Modal, Button } from 'react-materialize';

class EditProfile extends React.Component {
  render() {
    return (
      <div>
        <Button className="modal-trigger" href="#modalProfile" node="button">
          <i className="fas fa-pencil-alt"></i> Edit Profile
        </Button>
        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">
              Save
            </Button>
          ]}
          header="Edit Your Profile"
          id="modalProfile"
          options={{
            dismissible: false,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
          }}
        >
          <form onSubmit={this.props.handleOnSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <label htmlFor="icon_prefix">First Name</label>
                <input
                  name="firstName"
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  onChange={this.props.handleType}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <label htmlFor="icon_prefix1">Last Name</label>
                <input
                  name="lastName"
                  onChange={this.props.handleType}
                  id="icon_prefix1"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">business_center</i>
                <label htmlFor="icon_prefix2">Job</label>
                <input
                  name="job"
                  id="icon_prefix2"
                  type="text"
                  className="validate"
                  onChange={this.props.handleType}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <label htmlFor="icon_prefix3">Email</label>
                <input
                  name="email"
                  onChange={this.props.handleType}
                  id="icon_prefix3"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">local_phone</i>
                <label htmlFor="icon_prefix4">Phone</label>
                <input
                  name="phone"
                  id="icon_prefix4"
                  type="text"
                  className="validate"
                  onChange={this.props.handleType}
                />
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
export default EditProfile;
