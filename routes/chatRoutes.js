const chat = require('../controllers/chat');

module.exports = app => {
  // create chatRoom
  app.post('/api/create/chatroom', chat.createChatroom);
  // get chatroom
  app.post('/api/chatroom/:id', chat.getChatroom);
};