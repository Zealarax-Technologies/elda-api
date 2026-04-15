const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const imageRemover = require('../utils/imageRemover');

const schema = Joi.object({
    name: Joi.string().optional(),
    position: Joi.string().optional(),
    field: Joi.string().optional(),
});

function removeFile(req)
{
    if(req.file)
    {
        imageRemover('staff/'+req.file.filename);
    }
}

async function UpdateStaffRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        removeFile(req);
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(req.file)
    {
        value.image = 'staff/'+req.file.filename;
    }

    req.staffData = value;
    next();
}

module.exports = UpdateStaffRequest;