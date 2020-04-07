const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const BriefcardTemplateSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'users' },
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
const ModelClass = mongoose.model('briefcardTemplate', BriefcardTemplateSchema);

// Export the model
module.exports = ModelClass;
