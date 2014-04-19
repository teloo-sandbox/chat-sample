var messageMgr = require('../../managers/message-mgr');

exports.index = function(req, res, next) {
  res.json(messageMgr.getMessages());
};
