const Joi = require('joi');
const imageRemover = require('../utils/imageRemover');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');

const schema = Joi.object({
    name: Joi.string().required(),
    category_id: Joi.string().required()
});

async function CreateOurPartnerRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        if(req.file)
        {
            imageRemover('our_partner/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    const category = await models.PartnerCategory.findByPk(value.category_id);
    if(!category)
    {
        if(req.file)
        {
            imageRemover('our_partner/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatError('category_id', 'Invalid Category id'));
    }

    if(!req.file)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'image is required'));
    }

    value.image = 'our_partner/'+req.file.filename;
    req.partnerData = value;
    next();
}

module.exports = CreateOurPartnerRequest;