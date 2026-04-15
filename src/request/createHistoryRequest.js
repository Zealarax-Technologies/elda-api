const Joi = require('joi');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const ApiResponses = require('../utils/apiResponse');
const imageRemover = require('../utils/imageRemover');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().required(),
    date: Joi.date().required(),
});

async function CreateHistoryRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});

    if(error)
    {
        if(req.file)
        {
            imageRemover('history/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(!req.file)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'image is required'));
    }

    value.image = 'history/'+req.file.filename;
    req.historyData = value;
    next();
}

module.exports = CreateHistoryRequest;