const Joi = require('joi');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const ApiResponses = require('../utils/apiResponse');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required()
});

async function CreateCollaborationRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, { abortEarly: false });

    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }
    
    if (await models.Collaboration.findOne({ where: { title: value.title } })) {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('title', 'A record with this title already exists'));
    }

    req.collaborationData = value;
    next();
}

module.exports = CreateCollaborationRequest;