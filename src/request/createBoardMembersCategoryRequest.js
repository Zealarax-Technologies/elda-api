const Joi = require('joi');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const ApiResponses = require('../utils/apiResponse');
const models = require('../models');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
});

async function CreateBoardMembersCategoryRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});

    if(error)
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(await models.BoardMembersCategory.findOne({where: {name: value.name}}))
    {
        return ApiResponses(res, 422, 'Validation Errors', FormatError('name', 'Category name already exist'));
    }

    req.categoryData = value;
    next();
}

module.exports = CreateBoardMembersCategoryRequest;