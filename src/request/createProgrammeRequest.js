const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');
const imageRemover = require('../utils/imageRemover');

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
});

async function CreateProgrammeRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});

    if(error)
    {
        if(req.file)
        {
            imageRemover('programme/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(await models.Programme.findOne({where: {name: value.name}}))
    {
        if(req.file)
        {
            imageRemover('programme/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatError('name', 'Programme name already exist'));
    }

    if(!req.file)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'image is required'));
    }

    value.image = 'programme/'+req.file.filename;
    req.programmeData = value;
    next();
}

module.exports = CreateProgrammeRequest;