const briefcard = require('../controllers/briefcard');

module.exports = app => {
  // create BrefCard
  app.post('/api/create/briefcard', briefcard.createBriefcard);
  // Get All Briefcard by user Id
  app.post('/api/allbriefcard/:id', briefcard.getAllBriefcard);
  // Get Briefcard by id
  app.post('/api/briefcard/:id', briefcard.getBriefcard);
};
