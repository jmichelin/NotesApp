angular.module('notes-app', ['notes-app.editor', 'notes-app.notes', 'notes-app.search', 'ngRoute'])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/viewNotes', {
        templateUrl: '../notes/viewNotes.html',
        controller: 'viewNotesCtrl'
      })
      .when('/createNote', {
        templateUrl: '../notes/createNote.html',
        controller: 'newNoteCtrl'
      })
      .when('/editor', {
        templateUrl: '../editor/editor.html',
        controller: 'editorCtrl'
      })
      .when('/searchUser', {
        templateUrl: '../search/searchByUser.html',
        controller: 'searchUserNoteCtrl'
      })
  });

