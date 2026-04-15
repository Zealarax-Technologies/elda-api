const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');

const schema = Joi.object({
    question: Joi.string().optional(),
    answer: Joi.string().optional()
});

async function UpdateAdmissionFAQRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    req.faqData = value;
    next();

}

module.exports = UpdateAdmissionFAQRequest;