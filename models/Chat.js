const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const chatroomSchema = new Schema({
  sender: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  receiver: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  messages: [{ type: Schema.Types.ObjectId, ref: 'message' }],
  created_at: Date,
  updated_at: { type: Date, default: Date.now }
});

// Create the model class
const ModelClass = mongoose.model('chatroom', chatroomSchema);

// Export the model
module.exports = ModelClass;
