const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const removeUploadedFiles = require('../utils/removeUploadedFile');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    category_id: Joi.string().required()
});


async function CreatePublicationRequest(req, res, next) {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        removeUploadedFiles(req.files);
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    const type = await models.PublicationCategory.findByPk(value.category_id);
    if (!type) {
        removeUploadedFiles(req.files);
        return ApiResponses(res, 422, 'Validation Errors', FormatError('category_id', 'Invalid Publication Category id'));
    }

    if (!req.files?.image) {
        removeUploadedFiles(req.files);
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'Image is required'));
    }

    if (!req.files?.file) {
        removeUploadedFiles(req.files);
        return ApiResponses(res, 422, 'Validation Errors', FormatError('file', 'File is required'));
    }

    value.image = 'publication/' + req.files?.image[0].filename;
    value.file = 'publication/' + req.files?.file[0].filename;
    req.publicationData = value;

    next();
}

module.exports = CreatePublicationRequest;
