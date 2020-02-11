const message = require('../controllers/message');

module.exports = app => {
  // create chatRoom
  app.post('/api/create/message', message.createMessage);
  // get all message from chatroom
  app.post('/api/allmessage/:id', message.getMessageByChatroom);
};
