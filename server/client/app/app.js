angular.module('grump', [
  'grump.services',
  'grump.upload',
  'grump.browse',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/browse', {
      templateUrl: 'app/browse/browse.html',
      controller: 'BrowseController'
    })
    .when('/upload', {
      templateUrl: 'app/upload/upload.html',
      controller: 'UploadController'
    })
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'LoginController'
    })
    .otherwise({
        redirectTo : '/browse'
    });
})
.run();
