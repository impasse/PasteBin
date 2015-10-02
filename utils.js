var crypto = require("crypto");

exports.shortly = function(str) {
	return crypto.createHash('md5').update(str).digest('base64');
}