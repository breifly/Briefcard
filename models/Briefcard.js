const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const briefcardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    experiences: {
      id: String,
      experience: {}
    },
    profile: {
      type: Map,
      of: String
    },
    note: {
      type: Map,
      of: String
    }
  },
  {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  }
);

// Create the model class
const ModelClass = mongoose.model('briefcard', briefcardSchema);

// Export the model
module.exports = ModelClass;
