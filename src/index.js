$(document).ready(function() {
  var colors = ['red', 'purple', 'blue', 'black', 'teal', 'magenta', 'pink', 'orange'];
  var maximum = 400;

  function placefood() {
    var topcord = Math.random() * $(window).height();
    var leftcord = Math.random() * $(window).width();
    var color = colors[Math.floor(Math.random() * 8)];

    $('body').append($('<div class="food" style="top: ' + topcord + 'px; left: ' + leftcord + 'px; background-color: ' + color + ';"></div>'));
  }

  //for (var i = 0; i <= 100; i++) {
    //placefood();
  //}

  window.setInterval(function() {
    var currentnumber = $('.food').length;

    if (currentnumber<maximum) {
    placefood();
    }
  }, 400);

});

