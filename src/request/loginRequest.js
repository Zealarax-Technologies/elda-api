const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});


async function LoginRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    req.loginData = value;
    next();
}

module.exports = LoginRequest;