(function(window, $) {
  $(document).on('ready', function() {
    if (window.location.search.match(/internal\=1/)) {
      console.log("boom");
      $('body').addClass('show-internal');
    }
  });
})(window, $);