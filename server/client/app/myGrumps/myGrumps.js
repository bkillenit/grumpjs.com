angular.module('grump.myGrumps', ['ngCookies'])

.controller('MyGrumpsController', function ($scope, MyGrumps, $location, $cookies) {
  $scope.grumps = [];

  $scope.getMyGrumps = function(){
    return MyGrumps.getMyGrumps().then(function (results) {
      if(typeof results.data == 'string'){
        $location.url('/errorpage/?error=' + results.data);

      } else if (results.data.length === 0) {
        $location.url('/errorpage/?error=' + "you dont have any grumps to your name");
      }

      $scope.grumps = results.data;
      //returning scope.grumps for testing...
      return $scope.grumps;
    });
  };

  $scope.updateGrump = function (grumpID) {
    return MyGrumps.updateGrump(grumpID).then(function (results) {
      console.log("Grump Updated");
      //update the field
      $scope.getMyGrumps();
    });
  };

  $scope.deleteGrump = function (grumpID) {
    return MyGrumps.deleteGrump(grumpID).then(function (results) {
      console.log("Grump Deleted");
      //update the field
      $scope.getMyGrumps();
    });
  };

});
