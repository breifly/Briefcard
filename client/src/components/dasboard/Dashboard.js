import React from 'react';
import Discover from '../discover/Discover';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          Component info
          <div>
            <Discover />
          </div>
        </div>
        <div className="">Component ranking</div>
      </div>
    );
  }
}

export default Dashboard;
