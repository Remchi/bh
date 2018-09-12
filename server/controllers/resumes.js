const mongoose = require('mongoose')
const CV = require("../models/resume")
const User = require('../models/user')

module.exports = {
    //create a CV
    createCV: async(req, res, next)=>{
        const userId = req.value.body.userId;
        const description = req.value.body.description;
        const license = req.value.body.license;
        const certifications = req.value.body.certifications;
        const CVdocs = req.file.path,


        try{

            const userExists = await User.findById(userId);

            if(!userExists){
                return res.status(404).json({
                    message:"You cannot create a CV unless you are user"
                });
            }

            const newCV = new CV({
                _id: mongoose.Types.ObjectId(),
                userId,
                description,
                license,
                certifications,
                CVdocs
            });

            await newCV.save();

            res.status(201).json({
                message: "You have created a CV",

                createdCV:{
                    Description: newCV.description,
                    License: newCV.license,
                    Certification: newCV.certifications,
                    Docs: newCV.CVdocs
                },

                request:{
                    type: "GET",
                    url: 'http://localhost:3000/CVs/'+newCV._id
                }

            })            

        }catch(error){
            res.status(500).json({
                message: "There has been an error saving your CV",
                error
            });
        }
    },

    //read single CV
    readCVById: async(req, res, next)=>{
        const id = req.params.id;
        try{            
            const CV = await CV.findById(id);

            res.status(200).json({
                message: "Here is the CV you requested",
                CV,
                request: {
                    message: "To see all the CVs, click the link below",
                    type: "GET",
                    url: 'http://localhost:3000/readCVs'
                }
            })
        }catch(error){
            res.status(500).json({
                message: "There has been an error in your request",
                error
            })
        }
    },

    //read all the CVs
    readCVs: async(req, res, next)=>{
        
        try{            
            const allCVs = await CV.find({}).populate("user", "name");

            //check if allProduct is null
            if(allCVs <1){
                return res.status(404).json({
                    message: "No CVs at this moment"
                })
            }

            res.status(200).json({
                count: allCVs.length,
                CVs: allCVs.map(CV=>{
                    return{
                        _id: CV._id,
                        Name: CV.name,
                        Description: CV.description,
                        License: CV.license,
                        Certifications: CV.certifications,
                        Docs: CV.CVdocs,
                        request: {
                            type: "GET",
                            message: "To see more about the CV, click on this link",
                            url: 'http://localhost:3000/CVs/'+CV._id
                        }
                    }
                })
            });

        }catch(error){
            res.status(500).json({
                message:"There has been an error fetching the data",
                error
            });
        }
    },

    //update a CV
    updateCV: async(req, res, next)=>{
        const id = req.params.id;

        try{
            const CV  = await findByIdAndUpdate(id, req.value.body,{new: true});
            //console.log and check if CV is ok
            console.log("This is CV.ok", CV.ok);

            res.status(200).json({
                request:{
                    message:  "To see your updated CV, click link below",
                    type: "GET",
                    link: "http://localhost:3000"+id
                }
            })

        }catch(error){
            res.status(500).json({
                message: "There has been an error updating the resume",
                error
            })
        }
    },

    //delete a CV
    deleteCV: async(req, res, next)=>{
        const id = req.params.id;

        try{
            const result = await CV.remove({_id: id});

            if(result.ok){
                res.status(200).json({
                    message: "The CV has been removed",
                    request:{
                        message: "Use the url link below to create a new CV",
                        type: "POST",
                        link: "http://localhost:3000/CV"
                    }
                })
            }

        }catch(error){
            res.status(500).json({
                message: "There has been an error deleting your CV",
                error
            });
        }
    }
}