const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const imageRemover = require('../utils/imageRemover');
const models = require('../models');

const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category_id: Joi.string().required(),
});

async function CreateNewsRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        if(req.file)
        {
            imageRemover('news/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    const category = await models.NewsCategory.findByPk(value.category_id);
    if(!category)
    {
        if(req.file)
        {
            imageRemover('news/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatError('category_id', 'Invalid Category id'));
    }

    if(!req.file)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'image is required'));
    }

    value.image = 'news/'+req.file.filename;
    req.newsData = value;
    next();
}

module.exports = CreateNewsRequest;