const Joi = require('joi');

module.exports = {   

    validateBody: (schema)=>{
        return(req, res, next)=>{
            const result = Joi.validate(req.body, schema);

            if(result.error){
                return res.status(400).json(result.error);
            }
            //if the req.value is null, set it to an empty object
            if(!req.value){req.value = {};}

            req.value["body"] = result.value;

            //console.log(req.value['body']);
            next();
        }
    },

    schemas:{
        userSchema: Joi.object().keys({
            role: Joi.string().required(),
            name: Joi.string().allow("").optional(),
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().required()
        }),

        CVSchema: Joi.object().keys({
            userId: Joi.string().alphanum().required(),
            license:  Joi.string().required(),
            description: Joi.string().optional(),            
            certifications:  Joi.array().items(Joi.string()),
            date:  Joi.string().isoDate(),
            //CVdocs:  Joi.string().optional()

        }),

        postSchema: Joi.object().keys({
            userId: Joi.string().required(),
            title: Joi.string().required(),
            description: Joi.string().required(),
            license: Joi.array().items(Joi.string()).required() ,
            certifications:  Joi.array().items(Joi.string()),
            postImage:  Joi.string(),
            date:  Joi.string().isoDate()           
        }),

        eventSchema: Joi.object().keys({
            userId: Joi.string().required(),
            topic: Joi.string().required(),
            description: Joi.string().required(),
            location: Joi.string().required(),
            type: Joi.string().required(),
            date: Joi.date(),
            time: Joi.date().timestamp('unix'),
            eventImage:  Joi.string().dataUri()
        }),

        questionSchema: Joi.object().keys({
          
            answer: Joi.number().required(),
            choices: Joi.array().items(Joi.string()).required(),
            question:  Joi.string().required(),
            rationale:  Joi.string().required()
                   
        }),
    

    }
}