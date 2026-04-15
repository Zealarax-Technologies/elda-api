const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');

const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    order_no: Joi.number().integer().optional(),
    active: Joi.boolean().optional()
});

async function CreateSpecialEnquiryRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, { abortEarly: false });

    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    const [existingTitle] = await Promise.all([
        models.SpecialEnquiry.findOne({ where: { title: value.title } }),
    ]);
    
    if (existingTitle) {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('title', 'A record with this title already exists'));
    }

    req.specialEnquiryData = value;
    next();
}

module.exports = CreateSpecialEnquiryRequest;