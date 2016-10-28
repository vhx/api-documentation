(function(window, $) {
  $(document).on('ready', function() {
    var select = $('.response-examples').find('select');

    select.on('change', function() {
      var container = $(this).closest('.response-examples');
      var type = container.data('report');
      var val = $(this).val().split('_');
      var output = window.jsonHighlight(window.data[type][val[0]][val[1]]);

      $('#' + type + '_response').next().find('code').html(output);
    });

    select.trigger('change');
  });
})(window, $);