angular.module('chatSampleModule', [])
  .controller('MessageListController', function($scope) {
    $scope.messages = [
      {
        username: 'Teloo1',
        body: 'AngularJS と Socket.IO の練習のためにチャットアプリを作るよ！'
      },
      {
        username: 'Teloo2',
        body: 'わーいわーい'
      }
    ];
  })
  .controller('MessageEditorController', function($scope) {
    var initMessage = function() {
      return {
        username: '',
        body: ''
      };
    };

    $scope.newMessage = initMessage();

    $scope.addMessage = function() {
      $scope.newMessage = initMessage();
    };
  });
