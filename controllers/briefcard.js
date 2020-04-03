const Briefcard = require('../models/Briefcard');

exports.createBriefcard = function(req, res, next) {
  const experiences = req.body.experiences;
  const profile = req.body.profile;
  const note = req.body.note;
  const user = req.body.user;

  const BriefCard = new Briefcard({
    experiences: experiences,
    profile: profile,
    note: note,
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
