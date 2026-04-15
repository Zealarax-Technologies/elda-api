const Joi = require('joi');
const imageRemover = require('../utils/imageRemover');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');

const schema = Joi.object({
    name: Joi.string().optional(),
    category_id: Joi.string().optional()
});

async function UpdateOurPartnerRequest(req, res, next)
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

    if(value.category_id)
    {
        const category = await models.PartnerCategory.findByPk(value.category_id);
        if(!category)
        {
            if(req.file)
            {
                imageRemover('our_partner/'+req.file.filename);
            }
            return ApiResponses(res, 422, 'Validation Errors', FormatError('category_id', 'Invalid Category id'));
        }
    }

    if(req.file)
    {
        value.image = 'our_partner/'+req.file.filename;
    }
    
    req.partnerData = value;
    next();
}

module.exports = UpdateOurPartnerRequest;