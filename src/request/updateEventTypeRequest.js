const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');
const { Op } = require('sequelize');

const schema = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional()
});

async function UpdateEventTypeRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(value.name)
    {
        if(await models.EventType.findOne({where: {name: value?.name, uuid: {[Op.ne]: req.params.id}}}))
        {
            return ApiResponses(res, 422, 'Validation Errors', FormatError('name', 'Category name already exist'));
        }
    }

    req.typeData = value;
    next();
}

module.exports = UpdateEventTypeRequest;