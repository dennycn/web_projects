// file http-client.js
var https = require('https');
var fs = require('fs');
 
var options = {
	hostname: "localhost",
	port: 8888,
	path: '/',
	methed: 'GET',
	key: fs.readFileSync('../.keys/client.key'),
	cert: fs.readFileSync('../.keys/client.crt'),
	ca: [fs.readFileSync('../.keys/ca.crt')]
};
 
options.agent = new https.Agent(options);
 
var req = https.request(options, function(res) {
	res.setEncoding('utf-8');
	res.on('data', function(d) {
	console.log(d);
	});
});
req.end();
 
req.on('error', function(e) {
	console.log(e);
});