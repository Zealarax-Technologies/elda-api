const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');
const imageRemover = require('../utils/imageRemover');

const schema = Joi.object({
    category_id: Joi.string().optional(),
    name: Joi.string().optional(),
    position: Joi.string().optional(),
    about: Joi.string().optional(),
    social_links: Joi.object().pattern(Joi.string(), Joi.string().uri()).optional()
});


async function UpdateBoardMemberRequest(req, res, next)
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

    if(value.category_id)
    {
        const category = await models.BoardMembersCategory.findByPk(value.category_id);
        if(!category)
        {
            if(req.file)
            {
                imageRemover('board_members/'+req.file.filename);
            }
            return ApiResponses(res, 422, 'Validation Errors', FormatError('category_id', 'Invalid Category id'));
        }
    }

    if(req.file)
    {
        value.image = 'board_members/'+req.file.filename;
    }

    req.memberData = value;
    next();
}

module.exports = UpdateBoardMemberRequest;