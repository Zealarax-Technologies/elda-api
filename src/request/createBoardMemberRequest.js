const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const imageRemover = require('../utils/imageRemover');
const models = require('../models');

const schema = Joi.object({
    category_id: Joi.string().required(),
    name: Joi.string().required(),
    position: Joi.string().optional(),
    about: Joi.string().optional(),
    social_links: Joi.object().pattern(Joi.string(), Joi.string().uri()).optional()
});


async function CreateBoardMemberRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});

    if(error)
    {
        if(req.file)
        {
            imageRemover('board_members/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    const category = await models.BoardMembersCategory.findByPk(value.category_id);
    if(!category)
    {
        if(req.file)
        {
            imageRemover('board_members/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatError('category_id', 'Invalid Category id'));
    }

    if(!req.file)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('image', 'image is required'));
    }

    value.image = 'board_members/'+req.file.filename;
    req.memberData = value;
    next();
}

module.exports = CreateBoardMemberRequest;