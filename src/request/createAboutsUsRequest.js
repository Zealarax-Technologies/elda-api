const Joi = require('joi');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const ApiResponses = require('../utils/apiResponse');
const FormatError = require('../utils/formatError');
const imageRemover = require('../utils/imageRemover');

const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    order_no: Joi.number().integer().optional(),
    active: Joi.boolean().optional()
});

async function CreateAboutUsRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, { abortEarly: false });

    if(error)
    {
        if(req.file)
        {
            imageRemover('about/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    const [existingTitle] = await Promise.all([
        models.AboutUs.findOne({ where: { title: value.title } }),
    ]);
    
    if (existingTitle) {
        if(req.file)
        {
            imageRemover('about/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatError('title', 'A record with this title already exists'));
    }
    

    if(req.file)
    {
        value.image = 'about/'+req.file.filename;
    }

    req.aboutUsData = value;
    next();
}

module.exports = CreateAboutUsRequest;