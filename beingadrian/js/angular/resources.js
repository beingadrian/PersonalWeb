// Resources.js

angular
.module('beingWebApp.services', [])
  .factory('Projects', [function($firebaseArray) {

    var projects = [
      {
        name: "Presence"
      }
    ];

    return {
      all: function() {
        return projects;
      }
    };

  }]);
