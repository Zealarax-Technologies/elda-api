const Joi = require('joi');
const imageRemover = require('../utils/imageRemover');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    name: Joi.string().required(),
    testimony: Joi.string().required()
});

async function CreateTestimonyRequest(req, res, next)
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

    if(!req.file)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'image is required'));
    }

    value.image = 'testimony/'+req.file.filename;
    req.testimonyData = value;
    next();
}

module.exports = CreateTestimonyRequest;