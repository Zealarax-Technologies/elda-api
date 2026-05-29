const Joi = require('joi');
const imageRemover = require('../utils/imageRemover');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const FormatError = require('../utils/formatError');
const models = require('../models');

/**
 * Parses FormData array notation like course_fee[0][type], course_fee[0][cost]
 * into a proper array of objects: [{ type: 'online', cost: '600' }]
 * Handles both flat keys and nested object structures from body-parser
 * TODO: Later, update frontend to send JSON array directly for industry standard
 */
function parseFormDataArray(body, fieldName) {
    // Case 1: Body-parser already parsed it as a nested object
    // e.g., body.course_fee = { '0': { type: 'online', cost: '600' }, '1': { type: 'in person', cost: '1000' } }
    if (body[fieldName] && typeof body[fieldName] === 'object' && !Array.isArray(body[fieldName])) {
        const nested = body[fieldName];
        const result = [];
        for (const index of Object.keys(nested)) {
            const idx = parseInt(index, 10);
            if (!isNaN(idx) && typeof nested[index] === 'object') {
                result[idx] = nested[index];
            }
        }
        delete body[fieldName];
        return result.filter(item => item !== undefined && Object.keys(item).length > 0);
    }

    // Case 2: Body-parser already parsed it as an array
    if (body[fieldName] && Array.isArray(body[fieldName])) {
        const result = body[fieldName];
        delete body[fieldName];
        return result.filter(item => item !== undefined && Object.keys(item).length > 0);
    }

    // Case 3: Flat keys like course_fee[0][type] (original approach)
    const result = [];
    const regex = new RegExp(`^${fieldName}\\[(\\d+)\\]\\[(\\w+)\\]$`);

    for (const key of Object.keys(body)) {
        const match = key.match(regex);
        if (match) {
            const index = parseInt(match[1], 10);
            const property = match[2];

            if (!result[index]) {
                result[index] = {};
            }
            result[index][property] = body[key];
            delete body[key];
        }
    }

    return result.filter(item => item !== undefined && Object.keys(item).length > 0);
}

const schema = Joi.object({
    title: Joi.string().optional().allow('', null),
    description: Joi.string().optional().allow('', null),
    programme_id: Joi.string().optional().allow('', null),
    course_code: Joi.string().optional().allow('', null),
    number_of_ects: Joi.string().optional().allow('', null),
    mandatory: Joi.boolean().optional().allow('', null),
    date: Joi.array().items(Joi.string()).optional().allow('', null),
    duration: Joi.string().optional().allow('', null),
    course_fee: Joi.array().items(
        Joi.object({
            type: Joi.string().optional().allow('', null),
            cost: Joi.string().optional().allow('', null),
        })
    ).optional().allow('', null),
    learning_outcomes: Joi.array().items(Joi.string()).optional().allow('', null),
    assessment: Joi.array().items(Joi.string()).optional().allow('', null),
    language: Joi.string().optional().allow('', null),
    staff: Joi.array().items(Joi.string()).optional().allow('', null),
    how_to_apply: Joi.array().items(Joi.string()).optional().allow('', null),
    entry_requirements: Joi.array().items(Joi.string()).optional().allow('', null),
    modules: Joi.array().items(Joi.string()).optional().allow('', null),
    status: Joi.string().valid('upcoming', 'latest', 'popular').optional().allow('', null),
    target_audience: Joi.string().optional().allow('', null),
    course_chair_bio: Joi.string().optional().allow('', null),
    location: Joi.string().optional().allow('', null),
    prospectus_link: Joi.string().uri({ scheme: ['https'] }).optional().allow('', null)
});

async function UpdateCourseRequest(req, res, next) {

    const { error, value } = schema.validate(req.body, { abortEarly: false });

    // Parse FormData array notation for course_fee before validation
    // and assign to 'fee' which is the database column name
    // TODO: Update frontend to send JSON array directly
    const fee = parseFormDataArray(req.body, 'course_fee');
    console.log("Parsed Fee: ", fee);
    console.log("Request Body: ", req.body);

    if (fee.length > 0) {
        req.body.fee = fee;
        value.fee = fee;
        delete req.body.course_fee;
    }

    if (error) {
        if (req.file) {
            imageRemover('course/' + req.file.filename);
        }
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    if (value.programme_id) {

        const programme = await models.Programme.findByPk(value.programme_id);
        if (!programme) {
            if (req.file) {
                imageRemover('course/' + req.file.filename);
            }
            return ApiResponses(res, 422, 'Validation Errors', FormatError('programme_id', 'Invalid programme id'));
        }
    }

    if (value?.staff?.length > 0) {
        const invalidStaff = [];
        await Promise.all(value.staff.map(async (staffId) => {
            const staff = await models.Staff.findByPk(staffId);
            if (!staff) invalidStaff.push(staffId);
        }));

        if (invalidStaff.length > 0) {
            if (req.file) {
                imageRemover('course/' + req.file.filename);
            }
            return ApiResponses(res, 422, "Validation Error", FormatError('staff', 'You supplied an invalid staff id'));
        }
    }

    if (req.file) {
        value.image = 'course/' + req.file.filename;
    }

    req.courseData = value;
    next();
}

module.exports = UpdateCourseRequest;