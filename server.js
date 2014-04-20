var express = require('express');
var bodyParser = require('body-parser');
require('express-resource');
var messageMgr = require('./managers/message-mgr');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;

io.on('connect', function(socket) {
  // TODO メモリリーク
  messageMgr.onAddMessage(function(message) {
    socket.emit('newMessage', message);
  });
});

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.resource('api/messages', require('./routes/api/messages'), { id: 'id' });
app.use(require('errorhandler')());

server.listen(port);
console.log('listening on port ' + port);
