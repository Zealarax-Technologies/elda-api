const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');
const { Op } = require('sequelize');
const imageRemover = require('../utils/imageRemover');

const schema = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional()
});

async function UpdateProgrammeRequest(req, res, next)
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

    if(await models.Programme.findOne({where: {name: value.name, uuid: {[Op.ne]: req.params.id}}}))
    {
        if(req.file)
        {
            imageRemover('programme/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatError('name', 'Programme name already exist'));
    }

    if(req.file)
    {
        value.image = 'programme/'+req.file.filename;
    }

    req.programmeData = value;
    next();
}

module.exports = UpdateProgrammeRequest;