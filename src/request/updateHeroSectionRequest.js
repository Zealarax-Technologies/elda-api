const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');

const schema = Joi.object({
    title: Joi.string().optional().allow('', null),
    caption: Joi.string().optional().allow('', null),
    cta1_title: Joi.string().max(255).optional().allow('', null),
    cta1_link: Joi.string().uri().optional().allow('', null),
    cta2_title: Joi.string().max(255).optional().allow('', null),
    cta2_link: Joi.string().uri().optional().allow('', null),
});

async function UpdateHeroSectionrequest(req, res, next)
{
    const { error, value } = schema.validate(req.body);

    if(error)
    {
        if(req.file)
        {
            imageRemover('hero/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(req.file)
    {
        value.image = 'hero/'+req.file.filename;
    }
    
    req.heroData = value;
    next();
}

module.exports = UpdateHeroSectionrequest;