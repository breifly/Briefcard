import React from 'react';
import { Modal, Button } from 'react-materialize';

class EditVideo extends React.Component {
  render() {
    return (
      <div>
        <Button className="modal-trigger" href="#modalVideo" node="button">
          <i className="fas fa-pencil-alt"></i>
        </Button>
        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">
              Save
            </Button>
          ]}
          header="Edit Your Video"
          id="modalVideo"
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
                <i className="material-icons prefix">person</i>
                <label htmlFor="person">Person</label>
                <input
                  name="title"
                  id="person"
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
export default EditVideo;
