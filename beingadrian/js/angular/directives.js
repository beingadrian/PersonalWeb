// Directives.js

angular
  .module('beingWebApp.directives', [])
  .directive('work', function() {
    return {
      restrict: 'E',
      scope: {
        'title': '@',
        'data': '='
      },
      templateUrl: 'templates/'
    };
  });
