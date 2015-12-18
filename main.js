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
	});

	/*&('.submit-btn').click(function() {
		var result = $('input[type="radio"]:checked');

		if(result.length > 0){
			$('.result').html(result.val() + " is checked");
		}
		else {
			$('.result').html("No radio button checked");
		}
	});*/
}

$(document).ready(main);