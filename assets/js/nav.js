$(document).ready(function () {
	console.log('hey dirty');
	$('ul li a').click(function () {
		$('li a').removeClass('active');
		$(this).addClass('active');
	});
});
