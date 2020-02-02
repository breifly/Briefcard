const discover = require('../controllers/discover');

module.exports = app => {
  // Get All Users
  app.get('/dashboard', discover.getAllUsers);
  // Get User
  app.get('/dashboard/:id', discover.getDiscoverByUser);
  // Get All Discovers
  app.get('/api/discover', discover.getAllDiscovers);
  // Create Dicover
  app.post('/dashboard', discover.createDiscover);
};
