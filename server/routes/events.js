const express = require("express");
const router = require("express-promise-router")();
const {validateBody, schemas } = require("../helpers/routeHelpers");
const EventController = require("../controllers/events");

//const checkAuth = require('../middleware/check-auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads/events");
    },

    filename: function(req, file, cb){
        console.log("Please work....", req.body.userId);
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

router.route('/').post(validateBody(schemas.eventSchema), EventController.createEvent);

//read many posts
router.route('/').get(EventController.readEvents);
//read a single post
router.route('/:id').get(EventController.readEventById);

//read posts by a single user
//user needs to be authenticated
router.route('/:id').get(EventController.readUserEvents)

//update a post
//user needs to be authenticated
router.route('/:id').patch(validateBody(schemas.eventSchema), EventController.updateEvent)

//delete a post
//user needs to be authenticated
router.route('/:id').delete(EventController.deleteEvent);

module.exports = router;


