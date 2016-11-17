(function(window, $) {
  $(document).on('ready', function() {
    if (window.location.search.match(/internal\=1/)) {
      $('body').addClass('show-internal');
    }
  });
})(window, $);