const Briefcard = require('../models/Briefcard');

// Create BriefCard
exports.createBriefcard = function(req, res, next) {
  const profile = req.body.profile;
  const note = req.body.note;
  const experiences = req.body.experiences;
  const user = req.body.user;

  const BriefCard = new Briefcard({
    profile: profile,
    note: note,
    experiences: experiences,
    user: user
  });

  BriefCard.save(function(error, BriefCard) {
    if (error) {
      return next(error);
    }
    res.send(BriefCard);
  });
};

// Get all Briefcard by user
exports.getAllBriefcard = function(req, res, next) {
  console.log(req.params.id);
  Briefcard.find({ user: req.params.id }, function(error, briefcard) {
    if (error) {
      return next(error);
    }
    res.send(briefcard);
  });
};

// Show briefCard by ID
exports.getBriefcard = function(req, res, next) {
  console.log(req.params.id);
  Briefcard.find({ _id: req.params.id }, function(error, briefcard) {
    if (error) {
      return next(error);
    }
    res.send(briefcard);
  });
};
