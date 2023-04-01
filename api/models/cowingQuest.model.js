const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cowingQuestSchema = new Schema({
  question: {
    type: String,
    require: 'Question is required',
    minlength: [5, 'The question need at least 5 chars'],
    maxlength: [50, 'The question must be no longer than 50 chars']
  },
  module: {
    type: Number,
    require: 'The number of module is required',
    minlength: [1, 'The number of module need at least 1 char']
  },
  author: {
    type: String,
    require: 'The name of the author is required'
  }
}, { timestamps: true })

const CowingQuest = mongoose.model('CowingQuest', cowingQuestSchema);
module.exports = CowingQuest;