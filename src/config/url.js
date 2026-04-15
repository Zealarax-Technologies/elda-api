const path = require("path");

require('dotenv').config();

function url(resourcePath) {
	

	if (process.env.NODE_ENV === "development") {
		return `${process.env.APP_URL}/${resourcePath}`;
	}
	return `${process.env.LIVE_URL}/${resourcePath}`;
}

module.exports = url;