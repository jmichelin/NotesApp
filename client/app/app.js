angular.module('notes-app',['notes-app.notes', 'notes-app.search', 'ngRoute'])
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
  .when('/searchUser', {
    templateUrl: '../search/searchByUser.html',
    controller: 'searchUserNoteCtrl'
  })
});
