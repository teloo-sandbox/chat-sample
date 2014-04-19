var express = require('express');
var bodyParser = require('body-parser');
require('express-resource');
var app = express();
var port = 3000;

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.resource('api/messages', require('./routes/api/messages'), { id: 'id' });
app.use(require('errorhandler')());

app.listen(port);
console.log('listening on port ' + port);
