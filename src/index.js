$(document).ready(function() {
  var colors = ['red', 'purple', 'blue', 'black', 'teal', 'magenta', 'pink', 'orange'];

  for (var i = 0; i <= 25; i++) {
    var topcord = Math.random() * $(window).height();
    var leftcord = Math.random() * $(window).width();
    var color = colors[Math.floor(Math.random() * 8)];

    $('body').append($('<div class="food" style="top: ' + topcord + 'px; left: ' + leftcord + 'px; background-color: ' + color + ';"></div>'));
  };
});

