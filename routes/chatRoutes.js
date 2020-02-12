const chat = require('../controllers/chat');

module.exports = app => {
  // create chatRoom
  app.post('/api/create/chatroom', chat.createChatroom);
  // get chatroom
  app.post('/api/chatroom/:id', chat.getChatroom);
  // get Receiver
  app.post(`/api/receiver/:id`, chat.getReceiver);
  // get Sender
  app.post(`/api/sender/:id`, chat.getSender);
  //get All ChatRoom By USer
  app.post(`/api/allchatbyuser/:id`, chat.getAllChatRoomByUSer);
};
