import React from 'react';
import { Modal, Button } from 'react-materialize';

class EditNameTemplate extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="modal-trigger edit-block"
          style={{ marginTop: '20px' }}
          href="#modalTemplate"
          node="button"
        >
          Save
        </Button>
        <Modal
          actions={[
            <Button
              onClick={this.props.saveBriefCardTemplate}
              flat
              modal="close"
              node="button"
              waves="green"
            >
              Save
            </Button>,
            <Button flat modal="close" node="button" waves="green">
              close
            </Button>,
          ]}
          header="Name and Discribe your template"
          id="modalTemplate"
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
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="validate"
                  onChange={this.props.handleType}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <label htmlFor="describe">description</label>
                <input
                  name="describe"
                  onChange={this.props.handleType}
                  id="describe"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
export default EditNameTemplate;
