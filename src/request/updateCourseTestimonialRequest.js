const Joi = require('joi');
const imageRemover = require('../utils/imageRemover');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');

const schema = Joi.object({
    course_id: Joi.string().optional(),
    name: Joi.string().optional(),
    testimony: Joi.string().optional()
});

async function UpdateCourseTestimonyRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});
    if(error)
    {
        if(req.file)
        {
            imageRemover('course_testimony/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(value.course_id){
        const course = await models.Course.findByPk(value.course_id);
        if(!course)
        {
            if(req.file)
            {
                imageRemover('course_testimony/'+req.file.filename);
            }
            return ApiResponses(res, 422, 'Validation Errors', FormatError('coure_id', 'Invalid course id'));
        }
    }
    
    if(req.file)
    {
        value.image = 'course_testimony/'+req.file.filename;
    }

    
    req.testimonyData = value;
    next();
}

module.exports = UpdateCourseTestimonyRequest;