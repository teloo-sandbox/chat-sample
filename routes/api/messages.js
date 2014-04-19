var messageMgr = require('../../managers/message-mgr');

exports.index = function(req, res, next) {
  res.json(messageMgr.getMessages());
};

exports.create = function(req, res, next) {
  messageMgr.addMessage(req.body);
  res.send(200);
};
