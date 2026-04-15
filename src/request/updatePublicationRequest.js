const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const removeUploadedFiles = require('../utils/removeUploadedFile');

const schema = Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    category_id: Joi.string().optional()
});


async function UpdatePublicationRequest(req, res, next) {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        removeUploadedFiles(req.files || []);
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if (value.category_id) {
        const category = await models.PublicationCategory.findByPk(value.category_id);
        if (!category) {
            removeUploadedFiles (req.files || []);
            return ApiResponses(res, 422, 'Validation Errors', FormatError('category_id', 'Invalid Publication Category id'));
        }
    }

    if (req.files?.image) {
        value.image = 'publication/' + req.files?.image[0].filename;
    }

    if (req.files?.file) {
        value.file = 'publication/' + req.files?.file[0].filename;
    }

    req.publicationData = value;
    next();
}

module.exports = UpdatePublicationRequest;
