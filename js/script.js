$(function(){

	$('.round-button').click(function (e) {
		e.preventDefault(); 
		$('.round-nav').toggleClass('round-nav_active');
	})

	$('.round-button').click(function (e) {
		e.preventDefault(); 
		$('.link').toggleClass('link_active');
	})

	$('.round-button').click(function (e) {
		e.preventDefault(); 
		$(this).toggleClass('round-button_active');
	})

	$('.right-button').click(function (e) {
		e.preventDefault(); 
		$('.first-link').toggleClass('first-link_active');
	})

	$('.right-button').click(function (e) {
		e.preventDefault(); 
		$('.second-link').toggleClass('second-link_active');
	})

	$('.right-button').click(function (e) {
		e.preventDefault(); 
		$('.third-link').toggleClass('third-link_active');
	})

	$('.right-button').click(function (e) {
		e.preventDefault(); 
		$('.circle').toggleClass('circle_active');
	})

	$('.right-button').click(function (e) {
		e.preventDefault(); 
		$(this).toggleClass('right-button_active');
	})

})