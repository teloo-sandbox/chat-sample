var messages = [
  {
    username: 'Teloo1',
    body: 'AngularJS と Socket.IO の練習のためにチャットアプリを作るよ！'
  },
  {
    username: 'Teloo2',
    body: 'わーいわーい'
  }
];

exports.getMessages = function() {
  var results = [];
  messages.forEach(function(message) {
    results.push({
      username: message.username,
      body: message.body
    });
  });
  return results;
};

exports.addMessage = function(message) {
  messages.push(message);
};
