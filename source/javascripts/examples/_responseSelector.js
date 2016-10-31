(function(window, $) {
  $(document).on('ready', function() {
    var select = $('.response-examples').find('select');

    select.on('change', function() {
      var container = $(this).closest('.response-examples');
      var type = container.data('report');
      var sub = $(this).val().split('_');
      var arr = ['response', 'curl', 'node', 'javascript', 'php'];

      $.each(['response', 'curl', 'node', 'javascript', 'php'], function(index, item) {
        var val;

        if (item === 'response') {
          markup = window.jsonHighlight(window.data[type][sub[0]][sub[1]]);
        } else {
          markup = window.data[type][sub[0]]['client_' + sub[1]][item];
        }
        $('#' + type + '_' + item).next().find('code').html(markup);
      });
    });

    select.trigger('change');
  });
})(window, $);