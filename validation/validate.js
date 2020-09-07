//Validation
const Joi = require('@hapi/joi');


//SignUP Validation
module.exports = {
    signUp: (data) => {
        const schema = Joi.object().keys({
            email: Joi.string().email({
                minDomainSegments: 2,
                tlds: {
                    allow: ['com', 'net']
                }
            }).trim().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
            username: Joi.string().min(3).max(30).trim().required().label('Name is too short')
        });

        return schema.validate(data, {
            abortEarly: false
        });
    }
}