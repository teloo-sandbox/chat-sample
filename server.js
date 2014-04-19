var express = require('express');
require('express-resource');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));
app.resource('api/messages', require('./routes/api/messages'), { id: 'id' });
app.use(require('errorhandler')());

app.listen(port);
console.log('listening on port ' + port);
