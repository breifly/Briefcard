const briefcard = require('../controllers/briefcard');

module.exports = (app) => {
  // create BrefCard
  app.post('/api/create/briefcard', briefcard.createBriefcard);
  // Get BrefCard
  app.post('/api/briefcard/:id', briefcard.getBriefcard);
  // edit BriefCard template by id
  app.post('/api/edit/briefcard/:id', briefcard.editBriefcard);
  // Get BrefCard by chatroom
  app.post('/api/briefcard/chatroom/:id', briefcard.getBriefcardByChatroom);
};
