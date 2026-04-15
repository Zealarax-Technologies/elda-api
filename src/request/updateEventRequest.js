const Joi = require('joi');
const imageRemover = require('../utils/imageRemover');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');

const schema = Joi.object({
    title: Joi.string().optional(),
    date: Joi.date().optional(),
    location: Joi.string().optional(),
    topic: Joi.string().optional(),
    description: Joi.string().optional(),
    event_type_id: Joi.string().optional()
});

async function UpdateEventRequest(req, res, next)
{
    const {error, value} = schema.validate(req.body, {abortEarly: false});

    if(error)
    {
        if(req.file)
        {
            imageRemover('event/'+req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if(value.event_type_id)
    {
        const type = await models.EventType.findByPk(value.event_type_id);
        if(!type)
        {
            if(req.file)
            {
                imageRemover('event/'+req.file.filename);
            }
            return ApiResponses(res, 422, 'Validation Errors', FormatError('event_type_id', 'Invalid Event Type id'));
        }
    }

    if(req.file)
    {
        value.image = 'event/'+req.file.filename;
    }

    req.eventData = value;
    next();
}

module.exports = UpdateEventRequest;