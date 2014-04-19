angular.module('chatSampleModule', [])
  .controller('MessageListController', function($scope, $http) {
    $http
      .get('api/messages')
      .success(function(data, status, headers, config) {
        $scope.messages = data;
      })
      .error(function(data, status, headers, config) {
        throw new Error('メッセージリストの取得に失敗しました');
      });
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
