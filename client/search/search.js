angular.module('notes-app.search', [])
  .factory('searchUserNoteFactory', function($http) {
    return function postData(data) {
      $http({
        method:'POST',
        url:"api/searchNoteByUser",
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
    }).then(function(response) {
        console.log('RESPONSE: ', response.data);
        data.notes = response.data;
        data.username = '';
        return response;
    })
    }
  })
  .controller('searchUserNoteCtrl',function($scope, $http, searchUserNoteFactory) {
    var sendData = function(data) {
      searchUserNoteFactory(data);
    };
    $scope.data = {};
    $scope.data.sendData = sendData;  
  });