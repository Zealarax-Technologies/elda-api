function ApiResponses(response, statusCode, message = null, data = null, error = null) {
    const responseObject = {
        status: statusCode >= 200 && statusCode < 300 ? 'success' : 'error',
        statusCode: statusCode,
    }
    
    if (message) {
        responseObject.message = message;
    }
    if (data) {
        responseObject.data = data;
    }
    if (error) {
        responseObject.error = error;
    }
    return response.status(statusCode).json(responseObject);
}

module.exports = ApiResponses;