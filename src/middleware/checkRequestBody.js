const ApiResponses = require("../utils/apiResponse");

function CheckRequestBody(req, res, next) {
    if (['POST', 'PATCH', 'PUT'].includes(req.method) && req.body === undefined) {
        return ApiResponses(res, 400, 'Request body cannot be undefined.');
    }
    next();
}

module.exports = CheckRequestBody;
