const Joi = require('joi');
const imageRemover = require('../utils/imageRemover');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');

const schema = Joi.object({
    name: Joi.string().optional(),
    testimony: Joi.string().optional()
});

async function UpdateTestimonyRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        if(req.file)
        {
            imageRemover('testimony/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(req.file)
    {
        value.image = 'testimony/'+req.file.filename;
    }

    req.testimonyData = value;
    next();
}

module.exports = UpdateTestimonyRequest;