angular.module('notes-app',['notes-app.notes', 'notes-app.auth','notes-app.search', 'ngRoute'])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../notes/viewNotes.html',
    controller: 'viewNotesCtrl',
    authenticate: true
  })
  .when('/viewNotes', {
    templateUrl: '../notes/viewNotes.html',
    controller: 'viewNotesCtrl',
    authenticate: true
  })
  .when('/createNote', {
    templateUrl: '../notes/createNote.html',
    controller: 'newNoteCtrl',
    authenticate: true
  })
  .when('/searchUser', {
    templateUrl: '../search/searchByUser.html',
    controller: 'searchUserNoteCtrl',
    authenticate: true
  })
  .when('/signin', {
    templateUrl: '../users/signin.html',
    controller: 'AuthController'
  })
  .when('/signup', {
    templateUrl: '../users/signup.html',
    controller: 'AuthController'
  })
  .when('/signout', {
    authenticate: true
  })
  .otherwise({
    templateUrl: '../notes/viewNotes.html',
    controller: 'viewNotesCtrl',
    authenticate: true
  })
   $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.notes-app');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});

