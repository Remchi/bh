const mongoose = require('mongoose')
const Question = require("../models/question")
const questionBank = require('../question')

//get all the questions, answer choices, right answer, and rationales
//send to the front end/vuex store

module.exports = {

    insertQuestions: async(req,res, next)=>{
        try{
            //Add collections
            for(let [index,value] of Object.entries(Object.values(questionBank))){
                
                const questions = Object.entries(value);
               // console.log("Here are the stupid questions", questions.length);

               const questionLength = questions.length;

               for(let qIndex = 0; qIndex <=questionLength; qIndex++){
                    const question = questions[qIndex][1]["question"];
                    const choices = questions[qIndex][1]["choices"];
                    const answer = questions[qIndex][1]["answer"];
                    const rationale = questions[qIndex][1]["rationale"];

                    await Question.insert({
                        _id: mongoose.Types.ObjectId(),
                        answer,
                        choices,
                        question,
                        rationale
                    });
               }
                

                res.status(200).json({
                    message: "Questions have been successfully saved",
                    request:{
                        message: "To successfully view the questions, visit the link below",
                        type: "GET",
                        link: "http://localhost:3000/questions"
                    }
                });
            }
        }catch(error){
            res.status(500).json({
                message: "There has been an error saving questions",
                error
            })
        }        
    },

    
    getQuestions: async(req,res, next)=>{
        try{
            //Add collections
            for(let [index,value] of Object.entries(Object.values(questionBank))){
                
                //const qIndex = index;
                const questions = Object.entries(value);
                console.log("Here are the stupid questions", questions.length);

               const quest = questions[0][1]["question"];
               
                    res.status(200).json({
                        // qIndex,
                        quest,
                        questions,
                         message: "Questions have been successfully saved",
                         request:{
                             message: "To successfully view the questions, visit the link below",
                             type: "GET",
                             link: "http://localhost:3000/questions"
                         }
                     });
               
                
            }
        }catch(error){
            res.status(500).json({
                message: "There has been an error saving questions",
                error
            })
        }
    }
    //get 10 questions

    //get 70 random questions
}
