const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const FormatError = require('../utils/formatError');
const { Op } = require('sequelize');

const schema = Joi.object({
    name: Joi.string().optional(),
    icon: Joi.string().optional(),
    link: Joi.string().uri().optional()
});

async function UpdateSocialMediaRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(value.name)
    {
        if(await models.SocialMedia.findOne({where: {name: value.name, uuid: {[Op.ne]: req.params.id}}}))
        {
            return ApiResponses(res, 422, 'Validation Errors', FormatError('name', 'Social Media With this name already exist'));
        }
    }

    req.socialMediaData = value;
    next();
}

module.exports = UpdateSocialMediaRequest;