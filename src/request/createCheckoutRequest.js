const Joi = require('joi');
const ApiResponses = require('../utils/apiResponse');
const FormatJoiErrors = require('../utils/formatJoiErrors');
const models = require('../models');
const FormatError = require('../utils/formatError');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    postal_code: Joi.string().required(),
    country: Joi.string().required(),
    orders: Joi.array().items(
        Joi.object({
            course_id: Joi.string().required(),
            month: Joi.string().required()
        })
    ).required(),
    total_amount: Joi.number().precision(2).required()
});

async function CreateCheckoutRequest(req, res, next) {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return ApiResponses(res, 422, 'Validation Errors', FormatJoiErrors(error.details));
    }

    const invalidCourse = [];
    await Promise.all(value.orders.map(async (orderItem) => {
        const course = await models.Course.findByPk(orderItem.course_id);
        if (!course) invalidCourse.push(orderItem.course_id);
    }));

    if (invalidCourse.length > 0) {
        return ApiResponses(res, 422, "Validation Error", FormatError('orders', 'You supplied an invalid course id'));
    }

    req.checkoutData = value;
    next();
}

module.exports = CreateCheckoutRequest;