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
            name: Joi.string(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }),

        CVSchema: Joi.object().keys({
            user: Joi.string().required(),
            description: Joi.string().required(),
            license:  Joi.string().required(),
            certifications:  Joi.string(),
            date:  Joi.string().isoDate(),
            documentUpload:  Joi.string().dataUri()

        }),

        postSchema: Joi.object().keys({
            user: Joi.string().required(),
            title: Joi.string().required(),
            description: Joi.string().required(),
            license:  Joi.string().required(),
            certifications:  Joi.string(),
            date:  Joi.string().isoDate(),
            documentUpload:  Joi.string().dataUri()

        }),

        eventSchema: Joi.object().keys({
            user: Joi.string().required(),
            topic: Joi.string().required(),
            description: Joi.string().required(),
            type:Joi.string().required(),
            date:  Joi.string().isoDate(),
            documentUpload:  Joi.string().dataUri()

        })

    }
}