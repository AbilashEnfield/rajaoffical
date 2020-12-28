/*
Theme Name:     raja
Version:        1.0
Description:    Custom JS for the theme
*/
/* 
	All custom ids and classes used for the theme, starts with "raja".
*/
/* TABLE OF CONTENTS
	1. owl carousel
		1.1 .raja-owl-1
		1.2 .raja-owl-2
	2. counter up
		2.1 .raja-counter-up
	3. wow
	4. navigation
		4.1 #raja-navbar
	5. scroll top
		5.1 .raja-scrolltop
		5.2 .raja-sroll
		5.3 .raja-thetop
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* OWL CAROUSEL */
$(document).ready(function () {
	$(".raja-owl-1").owlCarousel({
		autoWidth: false,
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
});
$(document).ready(function(){
	$(".raja-owl-2").owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 1,
				nav: true
			},
			992: {
				items: 3,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}
		}
	});
	var owl = $('.owl-carousel');
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
});
/* END OF OWL CAROUSEL */
/* COUNTER UP */
$(document).ready(function () {
	$('.raja-counter-up').counterUp({
		delay: 10,
		time: 5000,
		offset: 100,
		beginAt: 0,
		formatter: function (n) {
			return n.replace(/,/g, '.');
		}
	});
});
/* END OF COUNTER UP */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#raja-navbar').addClass('solid');
	    } else {
	        $('#raja-navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#raja-navbar').hide();
	    }
	    else{
	    	$('#raja-navbar').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* SCROLL TOP */
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.raja-scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.raja-scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){
	$(".raja-scroll").click(function(){
		$("html,body").animate({
			scrollTop:$(".raja-thetop").offset().top - 0
		},3000, 'easeInOutExpo');
		return false;
	})
});
/* END OF SCROLL TOP */
/* END OF CUSTOM JS */