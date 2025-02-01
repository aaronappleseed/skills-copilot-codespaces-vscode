//create web server
var http = require('http');
var url = require('url');

//create server object
http.createServer(function(req, res) {
    //parse the url of the request
    var parsedUrl = url.parse(req.url, true);

    //get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    //get the query string as an object
    var queryStringObject = parsedUrl.query;

    //get the HTTP method
    var method = req.method.toLowerCase();

    //send the response
    res.end('Hello World\n');

    //log the request path
    console.log('Request received on path: ' + trimmedPath + ' with method: ' + method + ' and with these query string parameters', queryStringObject);
}).listen(3000, function() {
    console.log('Server listening on port 3000');
});