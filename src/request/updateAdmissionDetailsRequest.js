const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');
const { Op } = require('sequelize');

const schema = Joi.object({
    title: Joi.string().optional(),
    content: Joi.string().optional(),
    keyword: Joi.string().optional(),
    order_no: Joi.number().integer().optional(),
    active: Joi.boolean().optional()
});

async function UpdateAdmissionDetailsRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, { abortEarly: false });

    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(value.title)
    {
        if (await models.AdmissionDetails.findOne({ where: { title: value.title, uuid: {[Op.ne]: req.params.id} } })) {
            if(req.file)
            {
                imageRemover('about/'+req.file.filename);
            }
            return ApiResponses(res, 422, 'Validation Errors', FormatError('title', 'A record with this title already exists'));
        }
    }

    req.detailsData = value;
    next();
}

module.exports = UpdateAdmissionDetailsRequest;