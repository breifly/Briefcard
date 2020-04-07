import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import EditVideo from '../blockVideo/EditVideo';
import '../../css/blockVideo/BlockVideo01.css';

class BlockMessage01 extends React.Component {
  state = {
    video: 'https://youtu.be/embed/GjT9FH1Ww-0'
  };

  handleType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container-video-block">
        {this.state.video ? (
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src={this.state.video}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : (
          'loading'
        )}

        <div className=" row right">
          <EditVideo handleType={this.handleType} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}
export default connect(mapStateToProps, actions)(BlockMessage01);
