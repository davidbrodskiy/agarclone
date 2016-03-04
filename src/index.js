$(document).ready(function() {
  var colors = ['red', 'green', 'purple', 'blue', 'black', 'teal', 'magenta', 'pink', 'orange'];
  var maximum = 1500;

    function placeplayer() {
	  var color = colors[Math.floor(Math.random() * 8)];

      $('body').append($('<div class="player" style="background-color: ' + color + ';"></div>'));
    }

	function placefood() {
	  var topcord = Math.round(Math.random() * $('body').height());
	  var leftcord = Math.round(Math.random() * $('body').width());
	  var color = colors[Math.floor(Math.random() * 8)];
   
   foodarray[topcord][leftcord] = $('<div class="food" style="top: ' + topcord + 'px; left: ' + leftcord + 'px; background-color: ' + color + ';"></div>');

    $('body').append(foodarray[topcord][leftcord]);
  }

  //for (var i = 0; i <= 100; i++) {
    //placefood();
  //}

  placeplayer();

  var foodgrowth = 5;
  var foodarray = [];
   for (var i = 0; i < 5000; i++) {
   	foodarray[i] = [];
   }

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

  function checkForCollisions(x, y) {
  	var player = $('.player')[0];
  	var width = player.width();
  	var height = player.height();

  	for (var i = x; i < width + x; i++) {
  		for (var j = y; j < height + y; j++) {
  			if (foodarray[i][j]) {
  				foodarray[i][j].remove();
  			}
  		}
  	}
  }

  $(document).on('mousemove', function(event) {
  	var mouseX = event.clientX;
  	var mouseY = event.clientY;
  	speeds = distanceToPlayer(mouseX, mouseY);
  	checkForCollisions(mouseX, mouseY);
  });

  window.setInterval(function() {
  	console.log(speeds);
  	$('body').scrollLeft($('body').scrollLeft() + speeds.xSpeed);
  	$('body').scrollTop($('body').scrollTop() + speeds.ySpeed);
  }, 50);

});

