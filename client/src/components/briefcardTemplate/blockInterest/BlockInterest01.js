import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/blockInterest/BlockInterest01.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const interest = [
  { title: 'Board Games', img: '/images/InterestBlock/BoardGames.jpg' },
  { title: 'Charity', img: '/images/InterestBlock/Charity.jpg' },
  { title: 'Coffee', img: '/images/InterestBlock/Coffee.jpg' },
  { title: 'Dancing', img: '/images/InterestBlock/Dancing.jpg' },
  { title: 'Design', img: '/images/InterestBlock/Design.jpg' },
  { title: 'Gaming', img: '/images/InterestBlock/Gaming.jpg' },
  { title: 'Interior Design', img: '/images/InterestBlock/InteriorDesign.jpg' },
  { title: 'Mixology', img: '/images/InterestBlock/Mixology.jpg' },
  { title: 'Music', img: '/images/InterestBlock/Music.jpg' },
  { title: 'Photography', img: '/images/InterestBlock/Photography.jpg' },
  { title: 'Real Estate', img: '/images/InterestBlock/RealEstate.jpg' },
  { title: 'Sports', img: '/images/InterestBlock/Sports.jpg' },
  { title: 'Surf', img: '/images/InterestBlock/Surf.jpg' },
  { title: 'Tea', img: '/images/InterestBlock/Tea.jpg' },
  { title: 'Travel', img: '/images/InterestBlock/Travel.jpg' },
  { title: 'Volunteer', img: '/images/InterestBlock/Volunteer.jpg' },
  { title: 'Winter Sports', img: '/images/InterestBlock/WinterSports.jpg' },
];

class BlockInterest01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  handleChange(event) {
    this.setState({
      value: Array.from(event.target.selectedOptions, (item) => item.value),
    });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  renderSelectForm = () => {
    return interest.map((int) => {
      return (
        <option
          key={int.title}
          value={int.title}
          data-icon={process.env.PUBLIC_URL + int.img}
          className="left"
        >
          {int.title}
        </option>
      );
    });
  };

  renderInterest = () => {
    return this.state.value.map((value) => {
      return interest.map((int) => {
        if (int.title === value) {
          return (
            <div key={int.title} className="col m4">
              <div
                className="card-interest"
                style={{
                  backgroundImage: `url(${int.img}), linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9))`,
                }}
              >
                <p>{int.title}</p>
              </div>
            </div>
          );
        }
      });
    });
  };

  render() {
    return (
      <div className="">
        <div className="blockInterest">
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose your Interest
              <select
                multiple={true}
                value={this.state.value}
                onChange={this.handleChange}
              >
                {this.renderSelectForm()}
              </select>
            </label>
            <div className="row">{this.renderInterest()}</div>
            {/* <input
              className="btn btn-signin btn-message"
              type="submit"
              value="Submit"
            /> */}
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(BlockInterest01);
