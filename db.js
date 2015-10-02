var redis = require("redis");
var client = redis.createClient();

client.on('error',function(error) {
	console.error(error);
});

module.exports = client;