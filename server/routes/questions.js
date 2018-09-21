const express = require("express");
const router = require("express-promise-router")();

const {validateBody, schemas } = require("../helpers/routeHelpers");

const QuestionController = require("../controllers/questions");

router.route('/').post( QuestionController.insertQuestions );

router.route('/').get(QuestionController.getQuestions );

router.route('/10').get(QuestionController.get10Questions );

router.route('/70').get(QuestionController.get70Questions );

router.route('/grade').get(QuestionController.gradeQuiz);
module.exports = router;