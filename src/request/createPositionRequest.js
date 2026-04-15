const Joi = require('joi');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const ApiResponses = require('../utils/apiResponse');
const models = require('../models');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    requirements: Joi.string().required(),
    location: Joi.string().required(),
    job_type: Joi.string().required(),
    position_category_id: Joi.string().required()
});

async function CreatePositionRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    const category = await models.PositionCategory.findByPk(value.position_category_id);
    if(!category)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('position_category_id', 'Invalid Category id'));
    }

    req.positionData = value;
    next();
}

module.exports = CreatePositionRequest;