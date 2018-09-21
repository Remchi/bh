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
                
                const questions = Object.values(value);
               // console.log("Here are the stupid questions", questions.length);

               
                await Question.insertMany(questions);
             

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
            for(let [index,value] of Object.entries(Object.values(questionBank))){
                
                const questions = Object.values(value);
                console.log("Here are the stupid questions", questions.length);                              
               
                res.status(200).json({
                    // qIndex,
                   
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
    },
    //get 10 questions
    get10Questions: async(req, res, next)=>{
        try{

            const allQuestions = await Question.find({});

            let numOfQs = 0;
            const questions = [];
            const qIndexes = [];
            while(numOfQs<3){
                const qIndex = (Math.floor(Math.random()*724));
           
                if(!qIndexes.includes(qIndex)){
                    qIndexes.unshift(qIndex);                 
                }
                
                numOfQs++;
                
            }      
        
            for(const index of qIndexes){
                const question = allQuestions[index];
                questions.unshift(question);                    
            }
            
            res.status(200).json({
                count:questions.length,
                message: "These are 10 NAC questions for practice",
                objQuestion: questions.map(singleQuestion=>{
                    return{
                        answer:singleQuestion.answer,
                        // question: singleQuestion.question,
                        // choices: singleQuestion.choices,
                        // rationale: singleQuestion.rationale
                    }
                })
            }) 
                    
            
        }catch(error){
            res.status(500).json({
                error
            })
        }
    },

    //get 70 random questions
    get70Questions: async(req, res, next)=>{
        try{

            const allQuestions = await Question.find({});

            let numOfQs = 0;
            const questions = [];
            const qIndexes = [];

            while(numOfQs<70){
                const qIndex = (Math.floor(Math.random()*724));
             
                if(!qIndexes.includes(qIndex)){
                    qIndexes.unshift(qIndex);                 
                }
                
                numOfQs++;
                
            }      
        
            for(const index of qIndexes){
                const question = allQuestions[index];
                questions.unshift(question);                
            }
            res.status(200).json({
                count:questions.length,
                message: "These are 70 NAC questions for practice",
                questions
            })  
                 
            
        }catch(error){
            res.status(500).json({
                error
            })
        }
    },

    gradeQuiz: async(req, res, next)=>{
        try{

          
            const {userAnswers}= req.value.body;
            const answers = [0, 3, 3];

            let score = 0;

            for(let index = 0; index < userAnswers.length; index++){
                (answers[index]===userAnswers[index])? score++: score;
                console.log(score);   
            }   

            res.status(200).json({
               // questions,
                score: score/userAnswers.length
            })
        }catch(error){

        }
        
    }
}