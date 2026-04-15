const eventLogger = require("../config/eventLogger");
const multer = require("multer");

class ErrorHandler {
  notFound(req, res, next) {
    const error = new Error(
      `Route ${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl} does not exist`
    );
    error.statusCode = 404;
    next(error);
  }

  errorHandler(error, req, res, next) {
    const statusCode = error.statusCode || res.statusCode || 500;

    eventLogger.logEvents(
      `${new Date().toISOString()} | ${req.method} ${req.originalUrl} | ${error?.name}: ${error?.message}`,
      "errorLog.txt"
    );

    if (error instanceof multer.MulterError) {
      return res.status(400).json({ message: `Multer error: ${error.message} on field '${error.field}'` });
    }

    res.status(statusCode).json({
      message: error?.message || "An unexpected error occurred",
      stack:
        process.env.NODE_ENV === "production"
          ? "Enable development mode for stack trace"
          : error?.stack,
    });
  }
}

module.exports = new ErrorHandler();
