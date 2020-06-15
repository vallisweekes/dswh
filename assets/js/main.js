$(document).ready(() => {
	'use strict';
	$('ul li a').click(() => {
		$('li a').removeClass('active');
		$(this).addClass('active');
	});

	// BACK TO TOP
	$(window).scroll(() => {
		$(this).scrollTop() > 100
			? $('.back-to-top-button ').fadeIn()
			: $('.back-to-top-button ').fadeOut();
	});

	$('.back-to-top-button ').click(() => {
		$('html, body').animate({ scrollTop: 0 }, 1000);
		return;
	});

	// Carousel

	const track = $('.carousel-track');
	const slides = Array.from(track[0].children);
	const prev = $('.prev');
	const next = $('.next');

	const dotsNav = $('.carousel-nav');
	const dots = Array.from(dotsNav[0].children);

	const slideWidth = slides[0].getBoundingClientRect().width;

	const setSlidePosition = (slide, index) => {
		slide.style.left = slideWidth * index + 'px';
	};
	slides.forEach(setSlidePosition);

	const moveToSlide = (track, currentSlide, targetSlide) => {
		track[0].style.transform = 'translateX(-' + targetSlide.style.left + ')';
		currentSlide.classList.remove('current-slide');
		targetSlide.classList.add('current-slide');
	};

	// Next Slide
	next.click(function (e) {
		const currentSlide = track[0].querySelector('.current-slide');
		const nextSlide = currentSlide.nextElementSibling;
		moveToSlide(track, currentSlide, nextSlide);
	});
	// Previous Slide
	prev.click(function (e) {
		const currentSlide = track[0].querySelector('.current-slide');
		const previousSlide = currentSlide.previousElementSibling;
		moveToSlide(track, currentSlide, previousSlide);
	});

	dotsNav.click(function (e) {
		const targetDot = e.target.closest('.carousel-indicator');
		console.log('What is e target', e.target);
		console.log(targetDot);
		if (!targetDot) return;
		console.log(dots);
		const currentSlide = track[0].querySelector('.current-slide');
		const currentDot = dotsNav[0].querySelector('.current-slide');
		const targetIndex = dots.findIndex((dot) => {
			dot === targetDot;
		});
		console.log(targetIndex);
	});
});
