const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');
const imageRemover = require('../utils/imageRemover');

const schema = Joi.object({
    name: Joi.string().required(),
    position: Joi.string().required(),
    field: Joi.string().required(),
});

function removeFile(req)
{
    if(req.file)
    {
        imageRemover('staff/'+req.file.filename);
    }
}

async function CreateStaffRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        removeFile(req);
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(!req.file)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'image is required'));
    }

    value.image = 'staff/'+req.file.filename;
    req.staffData = value;
    next();
}

module.exports = CreateStaffRequest;