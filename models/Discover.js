const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const discoverSchema = new Schema({
  userId: String,
  friendId: String,
  isMatch: Boolean
});

// Create the model class
const ModelClass = mongoose.model('discover', discoverSchema);

// Export the model
module.exports = ModelClass;
