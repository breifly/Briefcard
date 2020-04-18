import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BlockInterest01 from './BlockInterest01';
import BlockInterest02 from './BlockInterest02';

class IndexBlockInterest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Interest
      value: this.props.briefcard.interest.interest,
    };
    this.handleChangeInterest = this.handleChangeInterest.bind(this);
  }

  handleChangeInterest(event) {
    this.setState({
      value: Array.from(event.target.selectedOptions, (item) => item.value),
    });
  }

  saveInterest = (form) => {
    const id = this.props.id;
    form = {
      id: this.props.idBlock,
      value: this.state.value,
    };
    if (this.props.briefcardEdit) {
      // edit from briefCard
      this.props.editBriefCard(id, form, () =>
        this.props.getBriefCard(this.props.id)
      );
    } else {
      // edit from briefCard Template
      this.props.editBriefCardTemplate(id, form, () =>
        this.props.getBriefCardTemplate(this.props.id)
      );
    }
  };

  renderBlockInterest = () => {
    switch (this.props.idBlock) {
      case 'BlockInterest01':
        return (
          <BlockInterest01
            value={this.state.value}
            handleChangeInterest={this.handleChangeInterest}
            briefUser={this.props.briefUser}
          />
        );
      case 'BlockInterest02':
        return (
          <BlockInterest02
            value={this.state.value}
            handleChangeInterest={this.handleChangeInterest}
            briefUser={this.props.briefUser}
          />
        );
      default:
        return;
    }
  };
  render() {
    return <div>{this.renderBlockInterest()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, actions)(IndexBlockInterest);
