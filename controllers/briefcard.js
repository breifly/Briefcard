const Briefcard = require('../models/Briefcard');
const BriefcardTemplate = require('../models/BriefcardTemplate');

// Create BriefCard
exports.createBriefcard = function (req, res, next) {
  BriefcardTemplate.findById({ _id: req.body.id }).then(function (
    BriefcardTemplate
  ) {
    console.log(BriefcardTemplate);

    const briefcard = new Briefcard({
      profile: BriefcardTemplate.profile,
      note: BriefcardTemplate.note,
      experiences: BriefcardTemplate.experiences,
      user: BriefcardTemplate.user,
      chatroom: req.body.chatroom,
    });

    briefcard.save(function (error, Briefcard) {
      if (error) {
        return next(error);
      }
      res.send(Briefcard);
    });
  });
};

// Show briefCard by ID
exports.getBriefcard = function (req, res, next) {
  Briefcard.find({ _id: req.params.id }, function (error, BriefcardTemplate) {
    if (error) {
      return next(error);
    }
    res.send(BriefcardTemplate);
  });
};

// Edit BriefCard
exports.editBriefcard = function (req, res, next) {
  console.log(req.body);
  // profile
  if (req.body.firstName) {
    Briefcard.findByIdAndUpdate(req.params.id, {
      profile: req.body,
    }).then(function (Briefcard) {
      res.json(Briefcard);
    });
  }
  // Message
  if (req.body.title) {
    Briefcard.findByIdAndUpdate(req.params.id, { note: req.body }).then(
      function (Briefcard) {
        res.json(Briefcard);
      }
    );
  }
  // Experiences
  if (req.body.experience) {
    Briefcard.findByIdAndUpdate(req.params.id, {
      experiences: req.body,
    }).then(function (Briefcard) {
      res.json(Briefcard);
    });
  }
};

exports.addExperienceBriefcard = function (req, res, next) {
  Briefcard.updateOne(
    { user: req.params.id },
    { $push: { experiences: req.body } }
  ).then(function (Briefcard) {
    res.json(Briefcard);
  });
};

exports.getBriefcardByChatroom = function (req, res, next) {
  Briefcard.find({ chatroom: req.params.id }, function (error, briefcard) {
    if (error) {
      return next(error);
    }
    res.send(briefcard);
  });
};
