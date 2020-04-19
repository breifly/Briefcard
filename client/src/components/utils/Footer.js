import React from 'react';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row center">
            <i class="fab fa-linkedin"></i>
            <p className="support">support@briefcard.io</p>
            <div className="footer-link">
              <p>About |</p>
              <p>Privacy Poclicy |</p>
              <p>Terms of Service |</p>
              <p>Contact</p>
            </div>
            <p>Copyright © BriefCard LLC 2020</p>
          </div>
        </div>
      </footer>
    );
  }
}
// © 2020 Copyright Text
export default Footer;
