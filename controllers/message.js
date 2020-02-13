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

exports.readMessage = function(req, res, next) {
  Message.findOneAndUpdate({ _id: req.params.id }, { status: true }, function(
    error,
    message
  ) {
    if (error) {
      return next(error);
    }
    res.send(message);
  });
};

exports.allUnreadMessagebyUser = function(req, res, next) {
  const idchatroom = req.body.chatId;
  const user = req.body.user;
  const query = {
    $and: [{ room: idchatroom }, { user: user }, { status: true }]
  };
  Message.find(query, function(error, message) {
    if (error) {
      return next(error);
    }
    console.log(message.length);
    res.json(message.length);
  });
};
