angular.module('notes-app.notes', [])
  .factory('viewNoteFactory', function($scope, $http) {
    return function getNotes() {
      $http({
        method: "GET",
        url: "api/notes"
      }).then(function success(response) {
        console.log('RESPONSE: ', response);
        $scope.data = response.data
      });
    }
  })
    .controller('viewNotesCtrl', function($scope, $http) {
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
    .factory('newNoteFactory', function($http) {
      return function postData(data) {
        $http({
          method: 'POST',
          url: "api/createNote",
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        }).then(function(response) {
          console.log('RESPONSE: ', response);
          data.noteName = '';
          data.noteData = '';
          return response;
        })
      }
    })
    .controller('newNoteCtrl', function($scope, $http, newNoteFactory) {
      var sendData = function(data) {
        newNoteFactory(data);
      };
      $scope.data = {};
      $scope.data.sendData = sendData;
    })