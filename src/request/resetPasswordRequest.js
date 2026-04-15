const ApiResponses = require('../utils/apiResponse');
const models = require('../models');
const Joi = require('joi');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});


async function ResetPasswordRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }


    const userEmail = await models.User.findOne({where: {email: value.email}});
    if(!userEmail)
    {
        return ApiResponses(res, 422, "Validation Error", FormatError("email", "invalid email address"));
    }

    req.userData = value;
    next();
}

module.exports = ResetPasswordRequest;