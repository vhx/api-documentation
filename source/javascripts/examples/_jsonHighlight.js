(function(window) {

  window.jsonHighlight = function(obj) {
    var json = JSON.stringify(obj, undefined, 2);
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        if (cls === 'key') {
          return '<span class="' + cls + '">' + match.replace(':', '') + '</span><span>:</span>';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
  };

})(window);