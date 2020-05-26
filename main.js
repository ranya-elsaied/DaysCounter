var express = require("express");
var app = express();

app.get('/', function (request, response){
    response.end('Hello World\n');
});
var server = app.listen(3000, function(){
    var host = server.address().host;
    var port = server.address().port;

    // Console will print the message
    console.log('Server running at http://%s:%s', host, port);   
});
 