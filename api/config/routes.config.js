const express = require('express');
const router = express.Router();
const questions = require('../controllers/cowingQuest.controllers');

router.get('/questions', questions.list);

module.exports = router;