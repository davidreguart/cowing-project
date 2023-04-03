const CowingQuest = require('../models/cowingQuest.model');
const createError = require('http-errors');


module.exports.exists = (req, res, next) => {
  CowingQuest.findById(req.params.id)
    .then((question) => {
      if (question) {
        req.question = question;
        next();
      } else {
        next(createError(404, 'Project not found'))
      }
    })
    .catch(next)
}