const chat = require('../controllers/chat');

module.exports = app => {
  // create chatRoom
  app.post('/api/create/chatroom', chat.createChatroom);
};
