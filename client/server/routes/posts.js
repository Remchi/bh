const express = require("express");
const router = require("express-promise-router")();
const {validateBody, schemas } = require("../helpers/routeHelpers");
const PostController = require("../controllers/posts");

//const checkAuth = require('../middleware/check-auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads/posts");
    },

    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-')+file.originalname);
    }

});

const fileFilter = (req, file, cb)=>{

    const acceptedFormats = ['application/msword', 'application/x-mswrite', 
    'text/plain', 'application/pdf', 'image/jpeg', 'image/png' ];
    /*accepted formats:
        - Microsoft Word, Microsoft Wordpad
        - Text File
        - Adobe Portable Document Format
        - Image
    */

    const format = acceptedFormats.includes(file.mimetype);

    console.log("this is the file mimetype ", file.mimetype);
    console.log("This accepted ", format);

    if(format){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

const upload = multer({
    storage,
    limits: {fileSize: 10000000},
    fileFilter    
});

//create a post
//user needs to be authenticated

router.route('/').post(upload.array("postImage"), validateBody(schemas.postSchema), PostController.createPost);

//read many posts
router.route('/').get(PostController.readPosts);

//read a single post
router.route('/:id').get(PostController.readPostById);

//update a post
//user needs to be authenticated
router.route('/:id').patch(validateBody(schemas.postSchema), PostController.updatePost)

//delete a post
//user needs to be authenticated
router.route('/:id').delete(PostController.deletePost);

module.exports = router;


