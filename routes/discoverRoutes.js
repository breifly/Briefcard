const discover = require('../controllers/discover');

module.exports = app => {
  // Get All Users
  app.get('/dashboard', discover.getAllUsers);
};
