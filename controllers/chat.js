const Chat = require('../models/Chat');
const User = require('../models/User');

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

  User.findOneAndUpdate(
    { _id: sender },
    { $push: { chatroom: chatroom._id } },
    { new: true },
    err => {
      if (err) {
        console.log('Something wrong when updating data!');
      }
    }
  );
  User.findOneAndUpdate(
    { _id: receiver },
    { $push: { chatroom: chatroom._id } },
    { new: true },
    err => {
      if (err) {
        console.log('Something wrong when updating data!');
      }
    }
  );
};

exports.getChatroom = function(req, res, next) {
  Chat.findOne({ _id: req.params.id }, function(error, chat) {
    if (error) {
      return next(error);
    }
    res.send(chat);
  });
};
