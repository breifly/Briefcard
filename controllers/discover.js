const User = require('../models/User');

exports.getAllUsers = function(req, res, next) {
  User.find(function(error, user) {
    if (error) {
      return next(error);
    }
    res.send(user);
  });
};
