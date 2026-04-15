const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

class EventLogger {
    constructor() {
        this.logger = this.logger.bind(this);
    }


  async logEvents(message, logName) {
    const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    if (!fs.existsSync(path.join(__dirname, "../..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "../..", "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "../..", "logs", logName),
      logItem
    );
  }

  logger(req, res, next) {
    const origin = req.headers.origin || "Unknown Origin";
    this.logEvents(`${req.method}\t${origin}\t${req.url}`, "reqLog.txt");
    console.log(`${req.method}\t${req.path}`);
    next();
  }
}

module.exports = new EventLogger();
