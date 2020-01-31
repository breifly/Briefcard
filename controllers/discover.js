const User = require('../models/User');
const Discover = require('../models/Discover');

exports.getAllUsers = function(req, res, next) {
  User.find(function(error, user) {
    if (error) {
      return next(error);
    }
    res.send(user);
  });
};

exports.createDiscover = function(req, res, next) {
  const userId = req.body.userId;
  const friendId = req.body.friendId;
  const isMatch = req.body.isMatch;

  const discover = new Discover({
    userId: userId,
    friendId: friendId,
    isMatch: isMatch
  });

  discover.save(function(error, discover) {
    if (error) {
      return next(error);
    }
    res.send(discover);
  });

  User.findOneAndUpdate(
    { _id: userId },
    { $push: { postMatch: friendId } },
    { new: true },
    err => {
      if (err) {
        console.log('Something wrong when updating data!');
      }
    }
  );
};

exports.getAllDiscovers = function(req, res, next) {
  Discover.find(function(error, discover) {
    if (error) {
      return next(error);
    }
    res.send(discover);
  });
};
