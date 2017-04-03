/* --This is how to setup a server with nodeJS--
    var http = require('http');

    var myServer = http.createServer(function(request, response)
    {
        response.writeHead(200, {"Content-Type" : "text/html"});

        response.write(`<h1>This is working</h1>`);
        response.end();
    });

    myServer.listen(3000);
    console.log('Go to http://localhost:3000 on your browser');
*/

// This will be running with ExpressJS
var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

// Gives flexability to run the app on different ports
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

app.use(require('./routes/index'))
app.use(require('./routes/speakers'))

var server = app.listen(app.get('port'), function()
{
    console.log('Listening on port ' + app.get('port'));
});