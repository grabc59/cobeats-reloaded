( function() {
  'use strict';
  angular.module( 'app' )
    .component( 'tone-sequencer', {
      templateUrl: "js/tone-sequencer/tone-sequencer.template.html",
      controller: controller
    });

  function controller() {
    const vm = this;
  }
    
} )();
