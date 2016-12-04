angular.module('notes-app',['notes-app.notes', 'ngRoute'])
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
});
