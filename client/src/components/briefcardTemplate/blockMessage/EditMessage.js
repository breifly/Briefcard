import React from 'react';
import { Modal, Button } from 'react-materialize';

class EditMessage extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="modal-trigger edit-block"
          href="#modalMessage"
          node="button"
        >
          <i className="fas fa-pencil-alt"></i>
        </Button>
        <Modal
          actions={[
            <Button
              onClick={this.props.saveMessage}
              flat
              modal="close"
              node="button"
              waves="green"
            >
              Save
            </Button>,
          ]}
          header="Edit Your Message"
          id="modalMessage"
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
            startingTop: '4%',
          }}
        >
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">message</i>
                <label htmlFor="message">Message</label>
                <input
                  name="message"
                  id="message"
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
export default EditMessage;
