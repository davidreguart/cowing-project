const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cowingQuestSchema = new Schema({
  question: {
    type: String,
    required: 'Question is required',
    minlength: [5, 'The question need at least 5 chars'],
    maxlength: [50, 'The question must be no longer than 50 chars']
  },
  module: {
    type: Number,
    required: 'The number of module is required',
    minlength: [1, 'The number of module need at least 1 char']
  },
  author: {
    type: String,
    required: 'The name of the author is required'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret) {
      delete ret.__v;
      ret.id = ret._id;
      delete ret._id;
      return ret;
    }
  }
})

const CowingQuest = mongoose.model('CowingQuest', cowingQuestSchema);
module.exports = CowingQuest;