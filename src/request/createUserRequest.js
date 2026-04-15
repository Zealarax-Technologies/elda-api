const ApiResponses = require('../utils/apiResponse');
const models = require('../models');
const Joi = require('joi');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    isAdmin: Joi.boolean().required()
});


async function CreateUserRequest(req, res, next){
    
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    const existingEmail = await models.User.findOne({where: {email: value.email}});
    if(existingEmail)
    {
        return ApiResponses(res, 422, "Validation Error", FormatError("email", "User with this email already exist"));
    }

    req.userData = value

    next();
}

module.exports = CreateUserRequest