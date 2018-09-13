const express = require("express");
const router = require("express-promise-router")();

const {validateBody, schemas } = require("../helpers/routeHelpers");

const PostController = require("../controllers/posts");
//const checkAuth = require('../middleware/check-auth');


//create a post
//user needs to be authenticated

router.route('/').post(validateBody(schemas.postSchema), PostController.createPost);

//read a single post
router.route('/:id').get(PostController.readPostById);

//update a post
//user needs to be authenticated
router.route('/:id').patch(validateBody(schemas.postSchema), PostController.updatePost)

//delete a post
//user needs to be authenticated
router.route('/:id').delete(PostController.deletePost);

module.exports = router;


