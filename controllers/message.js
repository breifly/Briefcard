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

  // Function unread message
  Chat.find({ _id: room }, function(error, chat) {
    if (error) {
      return next(error);
    }
    if (message.user === chat.sender) {
      Chat.findOneAndUpdate(
        { _id: room },
        { $push: { messages: message._id, unreadReceiver: message._id } },
        { new: true },
        err => {
          if (err) {
            console.log('Something wrong when updating data!');
          }
        }
      );
    } else {
      Chat.findOneAndUpdate(
        { _id: room },
        { $push: { messages: message._id, unreadSender: message._id } },
        { new: true },
        err => {
          if (err) {
            console.log('Something wrong when updating data!');
          }
        }
      );
    }
  });
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
  Chat.findOneAndUpdate(
    { unreadSender: req.params.id },
    { $pull: { unreadSender: req.params.id } },
    { multi: true },
    function(error, message) {
      if (error) {
        return next(error);
      }
    }
  );
  Chat.findOneAndUpdate(
    { unreadReceiver: req.params.id },
    { $pull: { unreadReceiver: req.params.id } },
    { multi: true },
    function(error, message) {
      if (error) {
        return next(error);
      }
      res.send(message);
    }
  );
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

// // Function read message
// Chat.find({ _id: message.room }, function(error, chat) {
//   if (error) {
//     return next(error);
//   }
//   if (message.user === chat.sender) {
//     Chat.findOneAndUpdate(
//       { _id: room },
//       { $pull: { unreadSender: req.params.id } },
//       { multi: true },
//       err => {
//         if (err) {
//           console.log('Something wrong when delete unreadReceiver!');
//         }
//       }
//     );
//   } else {
//     Chat.findOneAndUpdate(
//       { _id: message.room },
//       { $pull: { unreadReceiver: req.params.id } },
//       { multi: true },
//       err => {
//         if (err) {
//           console.log('Something wrong when delete unreadSender!');
//         }
//       }
//     );
//   }
// });
