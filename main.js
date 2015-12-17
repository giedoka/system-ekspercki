var main = function() {
	$('.menu-btn').click(function() {
		$('.page-nav').animate({
			left: "0px"
		}, 200);

		$('body').animate({
			right: "-155px"
		}, 200);
	});

	$('.close-menu-btn').click(function() {
		$('.page-nav').animate({
			left: "-155px"
		}, 200);

		$('body').animate({
			right: "0"
		}, 200);
	})
}

$(document).ready(main);