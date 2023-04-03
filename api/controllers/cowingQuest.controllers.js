const CowingQuest = require('../models/cowingQuest.model');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  CowingQuest.find()
    .then((questions) => res.json(questions))
    .catch(next)
}

module.exports.create = (req, res, next) => {
  CowingQuest.create(req.body)
    .then((question) => res.status(201).json(question))
    .catch(next)
}

module.exports.detail = (req, res, next) => res.json(req.question);

module.exports.delete = (req, res, next) => {
  CowingQuest.deleteOne({ _id: req.question.id })
    .then((question) => res.status(204).send())
    .catch(next)
}

module.exports.update = (req, res, next) => {
  Object.assign(req.question, req.body);
  req.question.save()
    .then((question) => res.json(question))
    .catch(next)
}