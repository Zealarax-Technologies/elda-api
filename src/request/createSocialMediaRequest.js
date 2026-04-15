const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    name: Joi.string().required(),
    icon: Joi.string().required(),
    link: Joi.string().uri().required()
});

async function CreateSocialMediaRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(await models.SocialMedia.findOne({where: {name: value.name}}))
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('name', 'Social Media With this name already exist'));
    }

    req.socialMediaData = value;
    next();
}

module.exports = CreateSocialMediaRequest;