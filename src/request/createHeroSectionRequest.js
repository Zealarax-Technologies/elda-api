const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const imageRemover = require('../utils/imageRemover');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    title: Joi.string().required(),
    caption: Joi.string().required(),
    cta1_title: Joi.string().max(255).required(),
    cta1_link: Joi.string().uri().required(),
    cta2_title: Joi.string().max(255).required(),
    cta2_link: Joi.string().uri().required(),
});

async function CreateHeroSectionrequest(req, res, next)
{
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if(error)
    {
        if(req.file)
        {
            imageRemover('hero/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(!req.file)
    {
        if(req.file)
        {
            imageRemover('hero/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'image is required'));
    }
    

    value.image = 'hero/'+req.file.filename;
    req.heroData = value;
    next();
}

module.exports = CreateHeroSectionrequest;