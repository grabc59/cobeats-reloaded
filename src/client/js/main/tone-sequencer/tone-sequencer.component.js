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
      // try {
      //   WebFont.load({
      //     google: {
      //       families: ['Open Sans']
      //     }
      //   });
      // } catch(e) {
      //   console.log("font not loaded")
      // }

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

  // nx.onload();

  // nx.startPulse();



      // nx.addStylesheet();
      vm.onload();
      nx.startPulse();
      
      // nx.onload = function() {
      //       nx.colorize("#f5871f");

      //       matrix1.col = 16;
      //       matrix1.init();
      //       matrix1.resize($("#Content").width(), 250);
      //       matrix1.draw();
      //       console.log(matrix1)
      //       console.log("matrix1")
      //   }


        // $(function() {
        //     console.log("interface loader function initialized")
        //     Interface.Slider({
        //         name: "BPM",
        //         min: 80,
        //         max: 200,
        //         value: Tone.Transport.bpm.value,
        //         drag: function(val) {
        //             Tone.Transport.bpm.value = val;
        //         }
        //     });
        //     Interface.Button({
        //         text: "Start",
        //         activeText: "Stop",
        //         type: "toggle",
        //         key: 32, //spacebar
        //         start: function() {
        //             loop.start();
        //         },
        //         end: function() {
        //             loop.stop();
        //         },
        //     });
        //     Interface.Loader();
        //     $(window).on("resize", function() {
        //         matrix1.resize($("#Content").width(), 250);
        //         matrix1.draw();
        //     });
        //     console.log("initialize tone sequencer")
        // });
    }
    vm.onload = function() {
      console.log('nx onload fired')
      nx.colorize("#f5871f");

      matrix1.col = 16;
      matrix1.init();
      matrix1.resize($("#Content").width(), 250);
      matrix1.draw();

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
