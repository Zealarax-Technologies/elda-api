const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const imageRemover = require('../utils/imageRemover');

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
});

function removeImage(req)
{
    if(req.files?.length > 0)
    {
        req.files.forEach((file) => {
            imageRemover('partnership' +file.filename);
        });
    }
}

async function CreatePartnershipRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        removeImage(req);
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(!req.files.length > 0)
    {
        removeImage(req);
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'image is required'));
    }

    value.images = req.files.map((file) => {
                        return 'partnership/'+file.filename;
                    });

    req.partnershipData = value;
    next();
}

module.exports = CreatePartnershipRequest;