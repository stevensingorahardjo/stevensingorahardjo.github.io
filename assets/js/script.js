$(document).ready(function() {

	$("#color-name").text('{ e komo mai }');
	$("#color-description").text('welcome');
	$("body, html").animate({
		scrollTop: 0
	});

	if (sessionStorage.getItem("isThisFirstTime") != "no") {
		$("#bulb").click(function() {
			$("#bulb").css("animation", "none");
			$("#bulb").css("cursor", "default");
			$("#open-sesame").fadeOut(200);
			$("#room-light").css('background-color', 'white');
			$("#room-light").css('transition', 'background-color 0.15s');
			$("#bulb").attr("src","assets/img/lightbulb_on.png");
			$("#spotlight").fadeIn(200);
			$("#greeting").fadeIn(200);
			$(".button").show();
			$("#down-arrow").show();

			sessionStorage.setItem("isThisFirstTime", "no");
		});
	}

	else {
		$("#bulb").css("animation", "none");
		$("#bulb").css("cursor", "default");
		$("#open-sesame").fadeOut(200);
		$("#room-light").css('background-color', 'white');
		$("#bulb").attr("src","assets/img/lightbulb_on.png");
		$("#spotlight").show();
		$("#greeting").show();
		$(".button").show();
		$("#down-arrow").show();
	}

	$("#header").typeIt({
	    strings: ['hi there!', 'nice to meet you!'],
	    speed: 90,
	    breakLines: false,
	    autoStart: false
	});

	function rollFilmStrip (event) {
		var hasAnimate = $("#filmstrip").hasClass("animate");
		console.log(hasAnimate);
		

		if (!hasAnimate) {
			$("#filmstrip").addClass("animate");
		}
		else {
			$("#filmstrip").removeClass("animate");
		}
		
	}

	$("#cyan-dot").click(function() {
		$("#studio-background").css("background-color", "rgba(170, 237, 236, 0.2)");
		$("#studio-background").css('transition', 'background-color 0.25s');
		$(".photo").fadeIn(200);
		$("#one").css('background-image', 'url("assets/img/hawaii1.jpg")');
		$("#two").css('background-image', 'url("assets/img/hawaii2.jpg")');
		$("#three").css('background-image', 'url("assets/img/hawaii3.jpg")');

		$(".color-stuff").fadeIn(220);
		document.getElementById('color-name').innerHTML = '{ e komo mai }';
		document.getElementById('color-description').innerHTML = 'welcome';

	});

	$("#magenta-dot").click(function() {
		$("#studio-background").css("background-color", "rgba(226, 187, 232, 0.11)");
		$("#studio-background").css('transition', 'background-color 0.25s');
		$(".photo").fadeIn(200);
		$("#one").css('background-image', 'url("assets/img/hawaii4.jpg")');
		$("#two").css('background-image', 'url("assets/img/hawaii5.jpg")');
		$("#three").css('background-image', 'url("assets/img/hawaii6.jpg")');

		$(".color-stuff").fadeIn(220);
		document.getElementById('color-name').innerHTML = '{ aloha kakahiaka }';
		document.getElementById('color-description').innerHTML = 'good morning';

	});

	$("#yellow-dot").click(function() {
		$("#studio-background").css("background-color", "rgba(218, 255, 125, 0.06)");
		$("#studio-background").css('transition', 'background-color 0.25s');
		$(".photo").fadeIn(200);
		$("#one").css('background-image', 'url("assets/img/hawaii7.jpg")');
		$("#two").css('background-image', 'url("assets/img/hawaii8.jpg")');
		$("#three").css('background-image', 'url("assets/img/hawaii9.jpg")');

		$(".color-stuff").fadeIn(220);
		document.getElementById('color-name').innerHTML = '{ ohana }';
		document.getElementById('color-description').innerHTML = 'family';

	});

	$("#white-dot").click(function(e) {
		e.preventDefault();
		
		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		});
	});

	$("#scroll-button").click(function(e) {
		e.preventDefault();
		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		});

	})

	$("#quick-photos").click(function(e) {
		e.preventDefault();
		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		});

	})

	// $(".button").click(function () {
	// 	$(".photo").show();
	// 	$(".color-stuff").show();
	// 	$("#studio-background").css("background-color", "rgba(138, 183, 143, 0.2)");
	// 	document.getElementById('color-name').innerHTML = '{ gre·​en }';
	// 	document.getElementById('color-description').innerHTML = 'a rejuvenation of the senses';
	// });

	var carddiv = "";

	interact('.draggable').draggable({
	    inertia: true,
	    restrict: {
	      restriction: "parent",
	      endOnly: true,
	      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
	    },
	    autoScroll: true,
	    onmove: dragMoveListener,
	    onend: dragDropListener,
	 });

	interact('#dropzone').dropzone({
	  accept: ".draggable",
	  ondrop: displayGallery,
	});

	$(window).scroll(function () {
		$("#down-arrow").css("opacity", 1 - $(window).scrollTop() / 250);
	});

	let timeOuts = {};
	function dragDropListener (event) {
		timeOuts[event.target.id] = setTimeout(function() {
			$(event.target).css("transform", "");
			event.target.removeAttribute('data-x');
			event.target.removeAttribute('data-y');
		}, 3000);
	}

	function dragMoveListener (event) {
	    var target = event.target,
	        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	    target.style.webkitTransform =
	    target.style.transform =
	      'translate(' + x + 'px, ' + y + 'px)';

	    target.setAttribute('data-x', x);
	    target.setAttribute('data-y', y);

	    carddiv = target.id;

	    if (timeOuts[event.target.id] != undefined) {
	    	clearTimeout(timeOuts[event.target.id]);
	    	timeOuts[event.target.id] = undefined;
		}	
	};

	function displayGallery (event) {
		
		var cardnumber = carddiv.slice(5);

		$("html, body").animate({ scrollTop: $('#photo-gallery').offset().top });
		if (cardnumber == 1) {
			$("#studio-background").css("background-color", "rgba(170, 237, 236, 0.2)");
			$(".photo").fadeIn(200);
			$(".color-stuff").fadeIn(220);
			$("#one").css('background-image', 'url("assets/img/hawaii1.jpg")');
			$("#two").css('background-image', 'url("assets/img/hawaii2.jpg")');
			$("#three").css('background-image', 'url("assets/img/hawaii3.jpg")');

			
			document.getElementById('color-name').innerHTML = '{ e komo mai }';
			document.getElementById('color-description').innerHTML = 'welcome';
	
		}

		else if (cardnumber == 2) {
			$("#studio-background").css("background-color", "rgba(226, 187, 232, 0.11)");
			$(".photo").fadeIn(200);
			$(".color-stuff").fadeIn(220);
			$("#one").css('background-image', 'url("assets/img/hawaii4.jpg")');
			$("#two").css('background-image', 'url("assets/img/hawaii5.jpg")');
			$("#three").css('background-image', 'url("assets/img/hawaii6.jpg")');

			document.getElementById('color-name').innerHTML = '{ aloha kakahiaka }';
			document.getElementById('color-description').innerHTML = 'good morning';
		}

		else {
			$("#studio-background").css("background-color", "rgba(218, 255, 125, 0.06)");
			$(".photo").fadeIn(200);
			$(".color-stuff").fadeIn(220);
			$("#one").css('background-image', 'url("assets/img/hawaii7.jpg")');
			$("#two").css('background-image', 'url("assets/img/hawaii8.jpg")');
			$("#three").css('background-image', 'url("assets/img/hawaii9.jpg")');

			document.getElementById('color-name').innerHTML = '{ ohana }';
			document.getElementById('color-description').innerHTML = 'family';
		}

		// console.log(cardnumber);

	};



// TEST

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

})



   


