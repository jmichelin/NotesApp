angular.module('notes-app.notes', ['ngQuill'])
  .config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
    ngQuillConfigProvider.set();
  }])
  .factory('viewNoteFactory', function ($http) {
    var getNotes = function () {
      return $http({
        method: "GET",
        url: "api/notes"
      }).then(function success(response) {
        console.log('RESPONSE: ', response.data[0].data);
        // $scope.data = response.data
        return response.data;
      });
    }
    return {
      getNotes: getNotes
    }
  })
  .controller('viewNotesCtrl', function ($scope, $http, viewNoteFactory) {
    viewNoteFactory.getNotes().then(function success(data) {
      $scope.contents = data;
    })
    function clicked(data) {
      console.log("CLICKED DATA", data)
      $scope.editorData = data;
    }

    $http({
      method: "GET",
      url: "api/notes"
    }).then(function success(response) {
      console.log('RESPONSE: ', response);
      $scope.data = response.data;
      $scope.data.clicked = clicked;
      $scope.editorData = '';
    });
  })
  .factory('newNoteFactory', function ($http) {
    return function postData(data) {
      $http({
        method: 'POST',
        url: "api/createNote",
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }).then(function (response) {
        console.log('RESPONSE: ', response);
        data.noteName = '';
        data.noteData = 'type note here';
        return response;
      })
    }
  })
  .controller('newNoteCtrl', [
    '$scope',
    '$timeout',
    function($scope, $timeout, newNoteFactory) {
      $scope.title = 'Quill works';
      $scope.readOnly = false;

      $timeout(function () {
        $scope.title += ' awesome!!!';
      }, 2000);

      $scope.editorCreated = function (editor) {
        console.log(editor);
      };
      $scope.contentChanged = function (editor, html, text) {
        console.log('editor: ', editor, 'html: ', html, 'text:', text);
      };
      $scope.data = {};
      $scope.data.sendData = function (data) {
        newNoteFactory(data);
      };

     }
  ]);
  // .controller('newNoteCtrl', [
  //   function ($scope, $http, newNoteFactory) {
  //     var sendData = function (data) {
  //       newNoteFactory(data);
  //     };
  //     $scope.data = {};
  //     $scope.data.sendData = sendData;
  //   }
  // }])