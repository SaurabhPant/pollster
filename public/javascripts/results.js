// Generated by CoffeeScript 1.5.0
(function() {

  $(function() {
    var socket;
    socket = io.connect();
    return socket.on('update', function(question) {
      var opt, _i, _len, _ref, _results;
      _ref = question.options;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        opt = _ref[_i];
        console.log($('#ot' + opt.name));
        $('#ot' + opt.name).text(opt.text + ' (' + opt.count + '/' + question.totalVotes + ')');
        _results.push($('#prog' + opt.name).css('width', (opt.count / question.totalVotes * 100) + '%'));
      }
      return _results;
    });
  });

}).call(this);
