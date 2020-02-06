import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import TinderCard from "react-tinder-card";
import ModalForm from "./ModalForm";
import "../css/SwipeCard.css";

class Discover extends React.Component {
  state = {
    isMatch: false
  };
  componentDidMount() {
    this.props.getAllUser();
  }

  matchDiscover = (userId, friendId, match) => {
    const discover = {
      userId: userId,
      friendId: friendId,
      isMatch: match
    };
    this.props.createDiscover(discover);
  };

  onSwipe = (direction, user) => {
    if (direction === "right" || direction === "up") {
      this.matchDiscover(this.props.auth._id, user, true);
    } else {
      this.matchDiscover(this.props.auth._id, user, false);
    }
  };

  onCardLeftScreen = userFriend => {
    if (
      this.props.discovers.isMatch === true &&
      this.props.auth.liked.includes(userFriend)
    ) {
      console.log("is match");
      this.setState({ isMatch: true });
    } else {
      this.setState({ isMatch: false });
    }
    console.log(this.state.isMatch);
  };

  renderAllUserTest = () => {
    if (this.props.users)
      return this.props.users.map(user => {
        if (
          user._id !== this.props.auth._id &&
          !user.liked.includes(this.props.auth._id) &&
          !user.unliked.includes(this.props.auth._id)
        ) {
          return (
            <TinderCard
              key={user._id}
              onSwipe={dir => this.onSwipe(dir, user._id)}
              onCardLeftScreen={() => this.onCardLeftScreen(user._id)}
              className="swipe"
            >
              <div
                style={{
                  backgroundImage: `url(${user.avatar ||
                    process.env.PUBLIC_URL + "/images/lechef.jpg"})`
                }}
                className="card-tinder"
              >
                <p>{user.email}</p>
              </div>

              {this.state.isMatch === true ? (
                <ModalForm ismatch={this.state.isMatch} user={user} />
              ) : (
                ""
              )}
            </TinderCard>
          );
        }
        return null;
      });
  };

  render() {
    return (
      <div className="">
        <div className="swipe-card-box">
          <div className="cardContainer">{this.renderAllUserTest()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    users: state.user.allUsers,
    discovers: state.discover.createDiscover
  };
}
export default connect(mapStateToProps, actions)(Discover);
