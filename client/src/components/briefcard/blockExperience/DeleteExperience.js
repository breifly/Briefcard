import React from 'react';

class DeleteExperience extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.deleteExperience(this.props.idx)}
          className="delete-block btn red"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    );
  }
}
export default DeleteExperience;
