import React from 'react';
import { Modal, Button } from 'react-materialize';

class EditExperience extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="modal-trigger edit-block"
          href={`#modalExperience${this.props.index}`}
          node="button"
        >
          <i className="fas fa-pencil-alt"></i>
        </Button>
        <Modal
          actions={[
            <Button
              onClick={() => this.props.editExperience(this.props.index)}
              flat
              modal="close"
              node="button"
              waves="green"
            >
              Save
            </Button>
          ]}
          header={`Edit Your Experience${this.props.index}`}
          id={`modalExperience${this.props.index}`}
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
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">home</i>
                <label htmlFor={`editCompany${this.props.index}`}>
                  Company
                </label>
                <input
                  name="editCompany"
                  id={`editCompany${this.props.index}`}
                  type="text"
                  className="validate"
                  onChange={this.props.handleType}
                  value={this.props.editCompany}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">business_center</i>
                <label htmlFor={`editPosition${this.props.index}`}>
                  Position
                </label>
                <input
                  name="editPosition"
                  id={`editPosition${this.props.index}`}
                  type="text"
                  className="validate"
                  value={this.props.editPosition}
                  onChange={this.props.handleType}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">date_range</i>
                <label htmlFor={`editDateStart${this.props.index}`}>
                  Date Start
                </label>
                <input
                  name="editDateStart"
                  id={`editDateStart${this.props.index}`}
                  type="text"
                  className="validate"
                  value={this.props.editDateStart}
                  onChange={this.props.handleType}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">date_range</i>
                <label htmlFor={`editDateEnd${this.props.index}`}>
                  Date End
                </label>
                <input
                  name="editDateEnd"
                  id={`editDateEnd${this.props.index}`}
                  type="text"
                  className="validate"
                  value={this.props.editDateEnd}
                  onChange={this.props.handleType}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">date_range</i>
                <label htmlFor={`editDescription${this.props.index}`}>
                  Description
                </label>
                <input
                  name="editDescription"
                  id={`editDescription${this.props.index}`}
                  type="text"
                  className="validate"
                  value={this.props.editDescription}
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
