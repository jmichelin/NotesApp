var editorModule = angular.module('notes-app.editor', ['ngQuill', 'notes-app.notes']);
editorModule.config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
  ngQuillConfigProvider.set();
}]);
editorModule
  .factory('editorFactory', function($http) {
    return function postData(data) {
      $http({
        method:'POST',
        url:"api/edit",
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }).then(function(response) {
        console.log('RESPONSE: ', response);
        data.noteData = '';
        return response;
      })
    }
  })
  .controller('editorCtrl', function($scope, $timeout, editorFactory) {

    $scope.title = 'Initialized quill editor...';
    $scope.body =
    $scope.readOnly = false;
    $timeout(function () {
      $scope.title += ' awsome!!!'
    }, 2000);
    $scope.editorCreated = function (editor) {
      console.log(editor);
    };
    $scope.contentChanged = function (editor, html, text) {
      console.log('editor: ', editor, 'html: ', html, 'text:', text);
    };
  }
);