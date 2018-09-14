const express = require("express");
const router = require("express-promise-router")();

const {validateBody, schemas } = require("../helpers/routeHelpers");

const CVController = require("../controllers/resumes");
//const checkAuth = require('../middleware/check-auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads/cv");
    },

    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-')+file.originalname);
    }

});

const upload = multer({
    storage,
    limits: {fileSize: 10000000}    
});


//create a post
//user needs to be authenticated

router.route('/').post(upload.array("CVdocs"), validateBody(schemas.CVSchema), CVController.createCV);

//read a single post
router.route('/:id').get(CVController.readCVById);

//update a post
//user needs to be authenticated
router.route('/:id').patch(validateBody(schemas.CVSchema), CVController.updateCV)

//delete a post
//user needs to be authenticated
router.route('/:id').delete(CVController.deleteCV);

module.exports = router;
