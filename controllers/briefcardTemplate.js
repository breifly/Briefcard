const BriefcardTemplate = require('../models/BriefcardTemplate');

// Create BriefCard
exports.createBriefcardTemplate = function (req, res, next) {
  const profile = req.body.profile;
  const note = req.body.note;
  const experiences = req.body.experiences;
  const user = req.body.user;
  const name = req.body.name;
  const description = req.body.describe;

  const Briefcard = new BriefcardTemplate({
    profile: profile,
    note: note,
    experiences: experiences,
    user: user,
    name: name,
    description: description,
  });

  Briefcard.save(function (error, BriefcardTemplate) {
    if (error) {
      return next(error);
    }
    res.send(BriefcardTemplate);
  });
};

// Get all Briefcard by user
exports.getAllBriefcardTemplate = function (req, res, next) {
  console.log(req.params.id);
  BriefcardTemplate.find({ user: req.params.id }, function (
    error,
    BriefcardTemplate
  ) {
    if (error) {
      return next(error);
    }
    res.send(BriefcardTemplate);
  });
};

// Show briefCard by ID
exports.getBriefcardTemplate = function (req, res, next) {
  BriefcardTemplate.find({ _id: req.params.id }, function (
    error,
    BriefcardTemplate
  ) {
    if (error) {
      return next(error);
    }
    res.send(BriefcardTemplate);
  });
};

exports.editBriefcardTemplate = function (req, res, next) {
  console.log(req.body);
  // profile
  if (req.body.firstName) {
    BriefcardTemplate.findByIdAndUpdate(req.params.id, {
      profile: req.body,
    }).then(function (BriefcardTemplate) {
      res.json(BriefcardTemplate);
    });
  }
  // Message
  if (req.body.title) {
    BriefcardTemplate.findByIdAndUpdate(req.params.id, { note: req.body }).then(
      function (BriefcardTemplate) {
        res.json(BriefcardTemplate);
      }
    );
  }
  // Experiences
  if (req.body.experience) {
    BriefcardTemplate.findByIdAndUpdate(req.params.id, {
      experiences: req.body,
    }).then(function (BriefcardTemplate) {
      res.json(BriefcardTemplate);
    });
  }
};

exports.addExperienceBriefcardTemplate = function (req, res, next) {
  BriefcardTemplate.updateOne(
    { user: req.params.id },
    { $push: { experiences: req.body } }
  ).then(function (BriefcardTemplate) {
    res.json(BriefcardTemplate);
  });
};

exports.deleteBriefcardTemplate = function (req, res, next) {
  BriefcardTemplate.findByIdAndRemove(req.params.id)
    .then(function (user) {
      res.json(user);
    })
    .catch(function (err) {
      res.json(err);
    });
};
