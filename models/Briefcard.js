const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const BriefcardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    chatroom: { type: Schema.Types.ObjectId, ref: 'chatroom' },
    profile: {
      type: Map,
      of: String,
    },
    note: {
      type: Map,
      of: String,
    },
    experiences: {
      id: String,
      experience: {},
    },
  },
  {
    timestamps: true, // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  }
);

// Create the model class
const ModelClass = mongoose.model('briefcard', BriefcardSchema);

// Export the model
module.exports = ModelClass;
