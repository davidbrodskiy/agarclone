$(document).ready(function() {
  var colors = ['red', 'green', 'purple', 'blue', 'black', 'teal', 'magenta', 'pink', 'orange'];
  var maximum = 1500;

    function placeplayer() {
	  var color = colors[Math.floor(Math.random() * 8)];

      $('body').append($('<div class="player" style="background-color: ' + color + ';"></div>'));
    }

	function placefood() {
	  var topcord = Math.random() * $('body').height();
	  var leftcord = Math.random() * $('body').width();
	  var color = colors[Math.floor(Math.random() * 8)];

    $('body').append($('<div class="food" style="top: ' + topcord + 'px; left: ' + leftcord + 'px; background-color: ' + color + ';"></div>'));
  }

  //for (var i = 0; i <= 100; i++) {
    //placefood();
  //}

  placeplayer();

  window.setInterval(function() {
    var currentnumber = $('.food').length;

    if (currentnumber<maximum) {
    placefood();
    }
  }, 50);

  var speeds = {
  	xSpeed: 0,
  	ySpeed: 0
  };
   
  function distanceToPlayer(clientX, clientY) {
    var player = $('.player')[0];
    var playerX = player.offsetLeft;
    var playerY = player.offsetTop;

    var differenceX = playerX - clientX;
    var differenceY = playerY - clientY;

    var totalDistance = Math.abs(differenceX) + Math.abs(differenceY);
    var speed = Math.sqrt(Math.pow(differenceX, 2) + Math.pow(differenceY, 2));

    // console.log(-.01 * (differenceX / totalDistance) * speed);

    return {
      xSpeed: Math.max(-6, Math.min(6, -.03 * (differenceX / totalDistance) * speed)),
      ySpeed: Math.max(-6, Math.min(6, -.03 * (differenceY / totalDistance) * speed))
    };
  }

  $(document).on('mousemove', function(event) {
  	var mouseX = event.clientX;
  	var mouseY = event.clientY;
  	speeds = distanceToPlayer(mouseX, mouseY);
  });

  window.setInterval(function() {
  	console.log(speeds);
  	$('body').scrollLeft($('body').scrollLeft() + speeds.xSpeed);
  	$('body').scrollTop($('body').scrollTop() + speeds.ySpeed);
  }, 50);

});

