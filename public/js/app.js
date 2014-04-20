angular.module('chatSampleModule', [])
  .factory("MessageManager", function($http) {
    var onAddMessageCallback = function(message) {};

    // TODO このままだと localhost からしかアクセスできない 
    var socket = io('http://localhost:3000');
    socket.on('connect', function() {
      socket.on('newMessage', onAddMessageCallback);
    });

    return {
      onAddMessage: function(callback) {
        // TODO 複数のコールバックを保持できるようにする
        onAddMessageCallback = callback;
      },
      getMessages: function(callback) {
        $http
          .get('api/messages')
          .success(function(data, status, headers, config) {
            callback(null, data);
          })
          .error(function(data, status, headers, config) {
            callback(new Error('メッセージリストの取得に失敗しました'));
          });
      },
      addMessage: function(message, callback) {
        $http
          .post('api/messages', message)
          .success(function(data, status, headers, config) {
            callback(null);
          })
          .error(function(data, status, headers, config) {
            callback(new Error('メッセージの送信に失敗しました'));
          });
      }
    };
  })
  .controller('MessageListController', function($scope, $http, MessageManager) {
    MessageManager.onAddMessage(function(message) {
      $scope.$apply(function() {
        $scope.messages.push(message);
      });
    });
    MessageManager.getMessages(function(err, messages) {
      if (err) {
        throw err;
      }
      $scope.messages = messages;
    });
  })
  .controller('MessageEditorController', function($scope, $http, MessageManager) {
    var initMessage = function() {
      return {
        username: '',
        body: ''
      };
    };

    $scope.newMessage = initMessage();

    $scope.addMessage = function() {
      MessageManager.addMessage($scope.newMessage, function(err) {
        if (err) {
          throw err;
        }
        $scope.newMessage = initMessage();
      });
    };
  });
