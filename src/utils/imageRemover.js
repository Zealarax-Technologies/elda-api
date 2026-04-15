const path = require("path");
const fs = require("fs");

function imageRemover(image) {
	const imagePath = path.join(__dirname, `../../public/${image}`);
	fs.unlink(imagePath, (err) => {
		if (err) {
			console.log(`Error deleting file : ${err}`);
		} else {
			console.log(`Image ${imagePath} deleted successfully`);
		}
	});
}

module.exports = imageRemover;