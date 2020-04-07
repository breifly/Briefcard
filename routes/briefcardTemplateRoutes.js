const briefcardTemplate = require('../controllers/briefcardTemplate');

module.exports = (app) => {
  // create BrefCard template
  app.post(
    '/api/create/briefcard-template',
    briefcardTemplate.createBriefcardTemplate
  );
  // Get All Briefcard template by user Id
  app.post(
    '/api/all-briefcard-template/:id',
    briefcardTemplate.getAllBriefcardTemplate
  );
  // Get Briefcard template by id
  app.post(
    '/api/briefcard-template/:id',
    briefcardTemplate.getBriefcardTemplate
  );
  // Create BriefCard template by id
  app.post(
    '/api/edit/briefcard-template/:id',
    briefcardTemplate.editBriefcardTemplate
  );
  //add Experience BriefCard Template by Id
  app.post(
    '/api/add/experience/briefcard-template/:id',
    briefcardTemplate.addExperienceBriefcardTemplate
  );
};
