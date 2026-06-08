const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatError = require('../utils/formatError');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');

const schema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().valid('research centers', 'publications', 'collaborations').required(),
    description: Joi.string().optional()
});

async function CreatePublicationCategoryRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});

    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(await models.PublicationCategory.findOne({where: {name: value.name}}))
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('name', 'Category name already exist'));
    }

    req.categoryData = value;
    next();
}

module.exports = CreatePublicationCategoryRequest;