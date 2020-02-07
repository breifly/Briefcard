import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-materialize';

class ModalForm extends React.Component {
  render() {
    // const { user } = this.props;
    return (
      <Modal
        open={true}
        bottomSheet={false}
        fixedFooter={false}
        id="modal-0"
        className="modal-match"
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%'
        }}
      >
        <div className="row center">
          <h4>It's a Match!</h4>
          {/* <div className="col m6 s6">
            <img
              className="avatar-large"
              src={user.avatar || process.env.PUBLIC_URL + '/images/lechef.jpg'}
              alt="avatar-friend"
            />
          </div>
          <div className="col m6 s6">
            <img
              className="avatar-large"
              src={
                this.props.auth.avatar ||
                process.env.PUBLIC_URL + '/images/lechef.jpg'
              }
              alt="avatar-friend"
            />
          </div> */}
        </div>
        <div className="button-match center">
          <i className="far fa-comments"></i> Send a Message
        </div>
        <div className="button-match center">
          <i className="fas fa-users"></i> Keep Swiping
        </div>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    users: state.user.allUsers
  };
}
export default connect(mapStateToProps, null)(ModalForm);
