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
    vm.$postLink = postLink;

    //////////////////////////////////
    /////// ON INIT HOOK
    //////////////////////////////////
    function onInit() {
      // Tone.Transport.start();
      // Interface.Loader();
    }

    

    //////////////////////////////////
    /////// POST LINK HOOK
    //////////////////////////////////
    function postLink() {
      console.log("post link fired");
      nx.addStylesheet();
      // console.log('window onload, this is where nx starts its functions')
      // get all canvases on the page and add them to the manager
      var allcanvi = document.getElementsByTagName("canvas");
      console.log(allcanvi);
      for (let i=0;i<allcanvi.length;i++) nx.transform(allcanvi[i]);

      if (nx.isTouchDevice) {
        document.addEventListener("touchmove", nx.blockMove, true);
        document.addEventListener("touchstart", nx.blockMove, true);
      }
      vm.onload();
      nx.startPulse();
    }
    vm.onload = function() {
      console.log('nx onload fired')
      nx.colorize("#f5871f");

      matrix1.col = 16;
      matrix1.init();
      matrix1.draw();
      matrix1.resize($("#Content").width(), 250);

      Interface.Slider({
          name: "BPM",
          min: 80,
          max: 200,
          value: Tone.Transport.bpm.value,
          drag: function(val) {
              Tone.Transport.bpm.value = val;
          }
      });
       Interface.Button({
          text: "Start",
          activeText: "Stop",
          type: "toggle",
          key: 32, //spacebar
          start: function() {
              loop.start();
          },
          end: function() {
              loop.stop();
          },
      });
    }
  }
    
} )();
