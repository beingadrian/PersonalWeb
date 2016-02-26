// controller.js

angular
  .module('beingWebApp', ['beingWebApp.services'])
  .controller('MainController', ['$scope', 'Projects', function($scope, Projects) {

    $scope.works = Projects.all();

  }]);
