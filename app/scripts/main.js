$(function() {
	setTimeout(function(){
		$('.hero-unit h1').addClass('loaded');	
	}, 500)
	

	setTimeout(function(){
		$('ul').addClass('loaded');	
	}, 1000)	

	Background.rotate();
		
})

var Background = (function() {
	var rotateTimer = null
	return {
		change: function() {
			if ($('.pic2').is(':visible')) {
				$('.pic2').fadeOut(1000);
			} else {
				$('.pic2').fadeIn(1000);
			}
		},
		rotate: function() {
			rotateTimer = setInterval(function() {
				Background.change()
			}, 10000);
		},
		stop: function() {
			clearInterval(rotateTimer);
		}
	}
})()

