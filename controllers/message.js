const Message = require('../models/Message');
const Chat = require('../models/Chat');

exports.createMessage = function(req, res, next) {
  const room = req.body.room;
  const user = req.body.user;
  const message_body = req.body.message.message;
  console.log(req.body.message);

  const message = new Message({
    room: room,
    user: user,
    message_body: message_body
  });

  message.save(function(error, message) {
    if (error) {
      return next(error);
    }
    res.send(message);
  });

  Chat.findOneAndUpdate(
    { _id: room },
    { $push: { messages: message._id } },
    { new: true },
    err => {
      if (err) {
        console.log('Something wrong when updating data!');
      }
    }
  );
};

exports.getMessageByChatroom = function(req, res, next) {
  Message.find({ room: req.params.id }, function(error, message) {
    if (error) {
      return next(error);
    }
    res.send(message);
  });
};
