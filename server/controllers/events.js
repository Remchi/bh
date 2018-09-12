const mongoose = require('mongoose')
const communityEvent = require("../models/communityEvent")
const User = require('../models/user')

module.exports = {
    //create a communityEvent
    createEvent: async(req, res, next)=>{
        const userId = req.value.body.userId;
        const topic = req.value.body.topic;
        const description = req.value.body.description;
        const type = req.value.body.type;
        const eventImage = req.file.path,


        try{

            const userExists = await User.findById(userId);

            if(!userExists){
                return res.status(404).json({
                    message:"You cannot create a communityEvent unless you are user"
                });
            }

            const communityEvent = new communityEvent({
                _id: mongoose.Types.ObjectId(),
                userId,
                topic,
                description,
                type,
                eventImage
            });

            await communityEvent.save();

            res.status(201).json({
                message: "You have created a communityEvent",

                createdEvent:{
                    Topic: communityEvent.topic,
                    Description: communityEvent.description,                    
                    Type: communityEvent.type,
                    Images: communityEvent.eventImage
                },

                request:{
                    type: "GET",
                    url: 'http://localhost:3000/events/'+communityEvent._id
                }

            })            

        }catch(error){
            res.status(500).json({
                message: "There has been an error saving your event",
                error
            });
        }
    },

    //read single communityEvent
    readEventById: async(req, res, next)=>{
        const id = req.params.id;
        try{            
            const communityEvent = await communityEvent.findById(id);

            res.status(200).json({
                message: "Here is the event you requested",
                communityEvent,
                request: {
                    message: "To see all the events, click the link below",
                    type: "GET",
                    url: 'http://localhost:3000/events'
                }
            })
        }catch(error){
            res.status(500).json({
                message: "There has been an error in your request",
                error
            })
        }
    },

    //read all the communityEvents
    readEvents: async(req, res, next)=>{
        
        try{            
            const communityEvents = await communityEvent.find({}).populate("user", "name");

            //check if allProduct is null
            if(communityEvents <1){
                return res.status(404).json({
                    message: "No communityEvents at this moment"
                })
            }

            res.status(200).json({
                count: communityEvents.length,
                communityEvents: communityEvents.map(communityEvent=>{
                    return{
                        _id: communityEvent._id,
                        Title: communityEvent.title,
                        Description: communityEvent.description,   
                        Type: communityEvent.type,                    
                        Images: communityEvent.images,
                        request: {
                            type: "GET",
                            message: "To see more about the event, click on this link",
                            url: 'http://localhost:3000/events/'+event._id
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

    //update a communityEvent
    updateEvent: async(req, res, next)=>{
        const id = req.params.id;

        try{
            const communityEvent  = await findByIdAndUpdate(id, req.value.body,{new: true});
            //console.log and check if communityEvent is ok
            console.log("This is event.ok", communityEvent.ok);

            res.status(200).json({
                request:{
                    message:  "To see your updated event, click link below",
                    type: "GET",
                    link: "http://localhost:3000/events"+id
                }
            })

        }catch(error){
            res.status(500).json({
                message: "There has been an error updating the resume",
                error
            })
        }
    },

    //delete a communityEvent
    deleteEvent: async(req, res, next)=>{
        const id = req.params.id;

        try{
            const result = await communityEvent.remove({_id: id});

            if(result.ok){
                res.status(200).json({
                    message: "The event has been removed",
                    request:{
                        message: "Use the url link below to create a new event",
                        type: "POST",
                        link: "http://localhost:3000/events"
                    }
                })
            }

        }catch(error){
            res.status(500).json({
                message: "There has been an error deleting your communityEvent",
                error
            });
        }
    }
}