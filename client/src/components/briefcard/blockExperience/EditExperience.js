import React from 'react';
import { Modal, Button } from 'react-materialize';

class EditExperience extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="modal-trigger edit-block"
          href="#modalExperience"
          node="button"
        >
          <i className="fas fa-pencil-alt"></i>
        </Button>
        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">
              Save
            </Button>
          ]}
          header="Edit Your Message"
          id="modalExperience"
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
                <i className="material-icons prefix">home</i>
                <label htmlFor="company">Company</label>
                <input
                  name="company"
                  id="company"
                  type="text"
                  className="validate"
                  onChange={this.props.handleType}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">business_center</i>
                <label htmlFor="position">Position</label>
                <input
                  name="position"
                  id="position"
                  type="text"
                  className="validate"
                  onChange={this.props.handleType}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">date_range</i>
                <label htmlFor="dateStart">Date Start</label>
                <input
                  name="dateStart"
                  id="dateStart"
                  type="text"
                  className="validate"
                  onChange={this.props.handleType}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">date_range</i>
                <label htmlFor="DateEnd">Date End</label>
                <input
                  name="DateEnd"
                  id="DateEnd"
                  type="text"
                  className="validate"
                  onChange={this.props.handleType}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">date_range</i>
                <label htmlFor="description">Description</label>
                <input
                  name="description"
                  id="description"
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
export default EditExperience;
