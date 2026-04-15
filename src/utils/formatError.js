function FormatError(fieldName, message) {
    return [{ field: fieldName, message: message }];
}

module.exports = FormatError;