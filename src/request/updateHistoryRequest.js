const Joi = require('joi');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const ApiResponses = require('../utils/apiResponse');
const imageRemover = require('../utils/imageRemover');

const schema = Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    date: Joi.date().optional(),
});

async function UpdateHistoryRequest(req, res, next)
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

    if(req.file)
    {
        value.image = 'history/'+req.file.filename;
    }

    req.historyData = value;
    next();
}

module.exports = UpdateHistoryRequest;