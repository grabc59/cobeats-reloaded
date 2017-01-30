( function() {
  'use strict';
  angular.module( 'app' )
    .component( 'toneSequencer', {
      templateUrl: "js/main/tone-sequencer/tone-sequencer.template.html",
      controller: controller
    });

  function controller() {
    const vm = this;
    vm.$onInit = onInit;

    function onInit() {
      console.log("initialize tone sequencer")
      // Tone.Transport.start();
    }
  }
    
} )();
