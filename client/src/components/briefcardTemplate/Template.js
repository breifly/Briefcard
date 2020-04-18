import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TemplateList from './TemplateList';

class Template extends React.Component {
  componentDidMount() {
    this.props.getAllBriefCardTemplate(this.props.match.params.id);
  }

  renderTemplateList = () => {
    if (this.props.templates) {
      return this.props.templates.map((briefcardTemplate) => {
        return (
          <div key={briefcardTemplate._id}>
            <Link to={`/briefcard-template/${briefcardTemplate._id}`}>
              <TemplateList briefcardTemplate={briefcardTemplate} />
            </Link>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div className="white-text container">
        <div className="center white-text">
          <img
            className="img-empty"
            alt="empty"
            src={process.env.PUBLIC_URL + '/images/create.svg'}
          />
          <h5>Create your first BriefCard!</h5>
          <Link
            to="/create-briefcard-template"
            className="btn-floating btn-large waves-effect waves-light"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
        <h4>List Generic Template</h4>
        {this.renderTemplateList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
    templates: state.briefcardTemplate.templates,
  };
}
export default connect(mapStateToProps, actions)(Template);