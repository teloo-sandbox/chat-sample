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

exports.index = function(req, res, next) {
  res.json(messages);
};
