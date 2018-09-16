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

const fileFilter = (req, file, cb)=>{

    const acceptedFormats = ['application/msword', 'application/x-mswrite', 'text/plain', 'application/pdf' ];
    /*accepted formats:
        - Microsoft Word, Microsoft Wordpad
        - Text File
        - Adobe Portable Document Format
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
