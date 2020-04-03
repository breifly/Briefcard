const briefcard = require('../controllers/briefcard');

module.exports = app => {
  // create BrefCard
  app.post('/api/create/briefcard', briefcard.createBriefcard);
  // Get All Briefcard by user
  app.post('/api/allbriefcard/:id', briefcard.getAllBriefcard);
};
