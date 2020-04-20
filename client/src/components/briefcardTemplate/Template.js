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

  renderNoTemplateList = () => {
    return (
      <div>
        <p className="center">You have not created a breifcard template yet.</p>
        <div className="row">
          <div className="col m6 12">
            <img
              className="img-empty"
              alt="empty"
              src={process.env.PUBLIC_URL + '/images/account.svg'}
            />
          </div>
          <div className="col m6 12">
            <div className="block-creeate-temp">
              <Link
                className="box-btn-template hoverable"
                to="/create-briefcard-template"
              >
                <span className="btn-template">New Template</span>
                <div className="btn-template-plus">
                  <i className="material-icons plus-plus">add</i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <h4 className="center">Briefcard Templates</h4>
        <div className="box-template">
          <div className="row">
            <div className="col m6 s12">
              <p>
                BriefCards are digital portfolios that you can optimize &
                personalize for each opportunity.
              </p>
            </div>
            <div className="col m6 s12">
              <Link
                className="box-btn-template hoverable"
                to="/create-briefcard-template"
              >
                <span className="btn-template">New Template</span>
                <div className="btn-template-plus">
                  <i className="material-icons plus-plus">add</i>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <h4 className="center">My Templates</h4>
        {this.props.templates === undefined ||
        this.props.templates.length === 0 ? (
          this.renderNoTemplateList()
        ) : (
          <div style={{ padding: '40px' }}>{this.renderTemplateList()}</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth.authenticated,
    templates: state.briefcardTemplate.templates,
  };
}
export default connect(mapStateToProps, actions)(Template);
