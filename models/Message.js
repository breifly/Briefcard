const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const messageSchema = new Schema({
  room: [{ type: Schema.Types.ObjectId, ref: 'chatroom' }],
  user: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  message_body: String,
  created_at: { type: Date, default: Date.now }
});

// Create the model class
const ModelClass = mongoose.model('message', messageSchema);

// Export the model
module.exports = ModelClass;
