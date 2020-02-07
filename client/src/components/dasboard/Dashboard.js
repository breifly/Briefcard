import React from 'react';
import Discover from '../discover/Discover';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <h4 className="center">Component info</h4>
        <div>
          <Discover />
        </div>
      </div>
    );
  }
}

export default Dashboard;
