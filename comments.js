//create web server
//create comments.js file
//create a server that listens on port 3000
//create a route that will respond with the text "Hello World" when a GET request is made to /comments
//export the server

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        res.write('Hello World');
        res.end();
    }
});
server.listen(3000);
module.exports = server;
//run the test
//npm test comments.js