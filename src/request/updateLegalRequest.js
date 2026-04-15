const Joi = require('joi');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const ApiResponses = require('../utils/apiResponse');
const FormatError = require('../utils/formatError');
const { Op } = require('sequelize');

const schema = Joi.object({
    title: Joi.string().optional(),
    content: Joi.string().optional()
});

async function UpdateLegalRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, { abortEarly: false });

    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(value.title)
    {
        if (await models.AboutUs.findOne({ where: { title: value.title, uuid: {[Op.ne]: req.params.id} } })) {
            return ApiResponses(res, 422, 'Validation Errors', FormatError('title', 'A record with this title already exists'));
        }
    }

    req.legalData = value;
    next();
}

module.exports = UpdateLegalRequest;