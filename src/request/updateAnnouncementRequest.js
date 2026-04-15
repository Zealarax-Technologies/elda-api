const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');

const schema = Joi.object({
    title: Joi.string().optional(),
    content: Joi.string().optional(),
});

async function UpdateAnnouncementRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, { abortEarly: false });

    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    req.announcementData = value;
    next();
}

module.exports = UpdateAnnouncementRequest;