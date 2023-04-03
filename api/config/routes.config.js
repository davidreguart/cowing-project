const express = require('express');
const router = express.Router();
const questions = require('../controllers/cowingQuest.controllers');
const questionsMid = require('../middleware/questions.mid')

router.get('/questions', questions.list);
router.post('/questions', questions.create);
router.get('/questions/:id', questionsMid.exists, questions.detail);
router.delete('/questions/:id', questionsMid.exists, questions.delete);
router.patch('/questions/:id', questionsMid.exists, questions.update);

module.exports = router;