var main = function() {
	$('.menu-btn').click(function() {
		$('.page-nav').animate({
			left: "0px"
		}, 200);

		$('body').animate({
			left: "155px"
		}, 200);
	});

	$('.close-menu-btn').click(function() {
		$('.page-nav').animate({
			left: "-155px"
		}, 200);

		$('body').animate({
			left: "0"
		}, 200);
	})
}

$(document).ready(main);