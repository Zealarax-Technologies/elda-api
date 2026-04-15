const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');

const schema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().optional()
});

async function CreateNewsLetterRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(await models.NewsLetter.findOne({where: {email: value.email}}))
    {
        return ApiResponses(res, 200, 'News Letter Created');
    }

    req.newsLetterData = value;
    next();
}

module.exports = CreateNewsLetterRequest;