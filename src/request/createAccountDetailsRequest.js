const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    account_name: Joi.string().required(),
    account_number: Joi.string().pattern(/^\d+$/).required(),
    bank_name: Joi.string().required(),
    default: Joi.boolean().optional()
});

async function CreateAccountDetailsRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, { abortEarly: false });

    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    req.detailsData = value;
    next();
}

module.exports = CreateAccountDetailsRequest;