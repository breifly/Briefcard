const Chat = require('../models/Chat');

exports.createChatroom = function(req, res, next) {
  const sender = req.body.sender;
  const receiver = req.body.receiver;

  const chatroom = new Chat({
    sender: sender,
    receiver: receiver
  });

  chatroom.save(function(error, chatroom) {
    if (error) {
      return next(error);
    }
    res.send(chatroom);
  });
};
