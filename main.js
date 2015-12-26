var main = function() {
	$('.menu-btn').click(function() {
		$('.page-nav').animate({
			left: "0px",
			opacity: "1"
		}, 400);

		/*$('body').animate({
			left: "155px"
		}, 200);*/
	});

	$('.close-menu-btn').click(function() {
		$('.page-nav').animate({
			left: "-155px",
			opacity: "0"
		}, 400);

		/*$('body').animate({
			left: "0"
		}, 200);*/
	});

	

	/*$('.submit-btn').click(function() {
		$('.submit-btn').css("background", "#ff0000");
	});*/

	$('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'glodny-tak' || $(this).attr('id') == 'glodny-nie') {
            $('.query ul li:nth-child(2)').show({
            	opacity: "1"
            });         
       }

       if($(this).attr('id') == 'mieso' || $(this).attr('id') == 'warzywa') {
            $('.query ul li:nth-child(3)').hide({
            	opacity: "0"
            }); 
            $('.query ul li:nth-child(4)').show({
            	opacity: "1"
            });         
       }

       if($(this).attr('id') == 'ani') {
            $('.query ul li:nth-child(4)').hide({
            	opacity: "0"
            });   
            $('.query ul li:nth-child(3)').show({
            	opacity: "1"
            });
       }
       if($(this).attr('id') == 'slodkie-tak') {
            $('.query ul li:nth-child(4)').show({
            	opacity: "1"
            });
       }

       if($(this).attr('id') == 'slodkie-nie') {
            $('.query ul li:nth-child(4)').hide({
            	opacity: "0"
            });
       } //NIE DZIALA!!!!!
   });
	$(document).scroll(function() {
    	if($( document ).scrollTop() >= $( ".three-imgs" ).offset().top - 40) {
         	$( ".menu-btn" ).css('color', '#000000');
    	} 	
    	else if($( document ).scrollTop() <= $( ".three-imgs" ).offset().top) {
    	    $( ".menu-btn" ).css('color', '#ffffff');
    	}
    	/*if($( document ).scrollTop() >= $( ".expert" ).offset().top - 25) {
    	    $( ".menu-btn" ).css('color', '#ffffff');
    	}
    	else if($( document ).scrollTop() <= $( ".expert" ).offset().top) {
    	    $( ".menu-btn" ).css('color', '#000000');
    	}*/
	});
}

function BtnClick() {
	var x = document.getElementsByClassName("result");
	var glodnyTak = document.getElementById("glodny-tak");
	var glodnyNie = document.getElementById("glodny-nie");
	var mieso = document.getElementById("mieso");
	var warzywa = document.getElementById("warzywa");
	var aniToAniTo = document.getElementById("ani");
	var slodkieTak = document.getElementById("slodkie-tak");
	var slodkieNie = document.getElementById("slodkie-nie");
	var odchudzanieTak = document.getElementById("odchudzanie-tak");
	var odchudzanieNie = document.getElementById("odchudzanie-nie");

	var tab1 = ["wątróbkę z pieczarkami i cebulą", "leczo", "panierowaną pierś z kurczaka", "kurczaka w sosie curry"];
	var tab2 = ["sałatkę grecka", "placki ziemniaczane", "warzywne racuchy", "makaron ze szpinakiem"];
	var tab3 = ["szarlotkę", "racuchy z jabłkami", "makaron z truskawkami", "kluski na parze"];
	var syr = "wyprażany syr";
	var tab4 = ["pierś z kurczaka gotowaną na parze", "szaszłyki drobiowe", "grillowanego łososia"];
	var tab5 = ["sałatkę grecką", "krem z dyni", "naleśniki z warzywami", "warzywną tortilla pełnoziarnistą"];
	var tab6 = ["bananowe ciastka bezglutenowe", "niskokaloryczną bezę", "błonnikowy piernik", "wzmacniającą baclavę"];
	var tab7 = ["grzanki z sosem pomidorowo-mięsnym", "ostre papryczki faszerowane mięsem mielonym", "kanapkę z pasztetem"];
	var tab8 = ["krążki cebulowe", "papryczki jalapenos nadziewane serem feta", "roladki z cukinii", "marchewkę"];
	var tab9 = ["batonika", "czekoladę", "drożdżówkę", "śliwki w czekoladzie"];
	var tab10 = ["pieczywo chrupkie", "musli z jogurtem naturalnym", "owsiankę na wodzie"];
	var chleb = "chleb razowy z szynką i pomidorem";
	var tab11 = ["sałatkę grecka", "krem z dyni", "zupę pomidorowa", "marchewkę"];

	var randomMeal = Math.floor(Math.random() * 4);
	var randomMeal2 = Math.floor(Math.random() * 3);
	var meal;
	if(glodnyTak.checked && mieso.checked){
		slodkieNie.checked = true;
		if(odchudzanieNie.checked){
			meal = tab1[randomMeal];
			x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
		}
		else {
			meal = tab4[randomMeal2];
			x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
		}
	}

	else if(glodnyTak.checked && warzywa.checked){
		slodkieNie.checked = true;
		if(odchudzanieNie.checked){
			meal = tab2[randomMeal];
			x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
		}
		else {
			meal = tab5[randomMeal];
			x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
		}
	}

	else if(glodnyTak.checked && aniToAniTo.checked && slodkieTak.checked && odchudzanieNie.checked){
		meal = tab3[randomMeal];
		x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
	}

	else if(glodnyTak.checked && aniToAniTo.checked && slodkieNie.checked) {
		odchudzanieNie.checked = true;
		meal = syr;
		x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
	}

	else if((glodnyTak.checked || glodnyNie.checked) && aniToAniTo.checked && slodkieTak.checked && odchudzanieTak.checked){
		meal = tab6[randomMeal];
		x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
	}

	else if(glodnyNie.checked && mieso.checked) {
		slodkieNie.checked = true;
		if(odchudzanieNie.checked){
			meal = tab7[randomMeal2];
			x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
		}
		else {
			meal = chleb;
			x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
		}
	}

	else if(glodnyNie.checked && warzywa.checked){
		slodkieNie.checked = true;
		if(odchudzanieNie.checked){
			meal = tab8[randomMeal];
			x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
		}
		else {
			meal = tab11[randomMeal];
			x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
		}
	}

	else if(glodnyNie.checked && aniToAniTo.checked && slodkieTak.checked && odchudzanieNie.checked){
		meal = tab9[randomMeal];
		x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
	}

	else if(glodnyNie.checked && aniToAniTo.checked && slodkieNie.checked) {
		odchudzanieNie.checked = true;
		meal = tab10[randomMeal2];
		x[0].innerHTML = "Proponuję, abyś zjadł/a " + meal;
	}

	else {
		x[0].innerHTML = "Sprawdź czy poprawnie wypełniłeś ankietę";
	}
}

$(document).ready(main);