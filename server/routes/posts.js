const express = require("express");
const router = require("express-promise-router")();
const {validateBody, schemas } = require("../helpers/routeHelpers");
const PostController = require("../controllers/posts");
//const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads/posts");
    },

    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-')+file.originalname);
    }

});

// const fileFilter = (req, file, cb)=>{
//     //reject a file
//     if(file.mimetype ==='image/jpeg'|| file.mimetype==='image/png'){
//         cb(null, true);
//     }else{
//         cb(null, false);
//     }
// }

const upload = multer({
    storage,
    limits: {fileSize: 10000000},
    //fileFilter
});


//create a post
//user needs to be authenticated

router.route('/').post(upload.array("postImage"), validateBody(schemas.postSchema), PostController.createPost);

//read a single post
router.route('/:id').get(PostController.readPostById);

//update a post
//user needs to be authenticated
router.route('/:id').patch(validateBody(schemas.postSchema), PostController.updatePost)

//delete a post
//user needs to be authenticated
router.route('/:id').delete(PostController.deletePost);

module.exports = router;


