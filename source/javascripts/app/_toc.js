//= require ../lib/_jquery_ui
//= require ../lib/_jquery.tocify
//= require ../lib/_imagesloaded.min
(function (global) {
  'use strict';

  var closeToc = function() {
    $(".tocify-wrapper").removeClass('open');
    $("#nav-button").removeClass('open');
  };

  $(document).on('toc:focus', function(event, data) {
    var sub_header = data.el.parent('.tocify-subheader');

    if (sub_header.length) {
      sub_header.prev('.tocify-item').addClass('tocify-focus');
    }
  });

  var makeToc = function() {
    global.toc = $("#toc-api").tocify({
      content: '.main',
      selectors: '.head-3, .text--bold',
      extendPage: false,
      theme: 'none',
      smoothScroll: false,
      showEffectSpeed: 0,
      hideEffectSpeed: 180,
      ignoreSelector: '.toc-ignore',
      highlightOffset: 160,
      scrollTo: -1,
      scrollHistory: true,
      hashGenerator: function (text, element) {
        return element.prop('id');
      }
    }).data('toc-tocify');

    $("#nav-button").click(function() {
      $(".tocify-wrapper").toggleClass('open');
      $("#nav-button").toggleClass('open');
      return false;
    });

    $(".page-wrapper").click(closeToc);
    $(".tocify-item").click(closeToc);
  };

  // Hack to make already open sections to start opened,
  // instead of displaying an ugly animation
  function animate() {
    setTimeout(function() {
      toc.setOption('showEffectSpeed', 180);
      $('#tocify-header4').before('<h5 class="margin-top-medium padding-medium head-5 text--gray">Resources</h5>');
    }, 50);
  }

  $(function() {
    makeToc();
    animate();
    $('.content').imagesLoaded( function() {
      global.toc.calculateHeights();
    });
  });
})(window);

