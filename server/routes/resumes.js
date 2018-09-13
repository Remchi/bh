const express = require("express");
const router = require("express-promise-router")();

const {validateBody, schemas } = require("../helpers/routeHelpers");

const CVController = require("../controllers/resumes");
//const checkAuth = require('../middleware/check-auth');


//create a post
//user needs to be authenticated

router.route('/').post(validateBody(schemas.CVSchema), CVController.createPost);

//read a single post
router.route('/:id').get(CVController.readPostById);

//update a post
//user needs to be authenticated
router.route('/:id').patch(validateBody(schemas.CVSchema), CVController.updatePost)

//delete a post
//user needs to be authenticated
router.route('/:id').delete(CVController.deletePost);

module.exports = router;
