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
              Close
            </Button>,
            <Button
              onClick={this.props.preSaveForm}
              flat
              modal="close"
              node="button"
              waves="green"
            >
              Save
            </Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Edit Your Profile"
          id="modalProfile"
          open={false}
          options={{
            dismissible: true,
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
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <label htmlFor="icon_prefix">First Name</label>
              <input id="icon_prefix" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <label htmlFor="icon_prefix1">Last Name</label>
              <input id="icon_prefix1" type="text" className="validate" />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default EditProfile;
