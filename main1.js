$(document).ready(main);
$(document).ready(cic);


var contador = 1;
function cic(){
	$('.submenu').click(function(){
		if (contador == 1) {
			$('.nav1').animate({
				left: ''
			});
			contador = 0;
		} else {
			contador = 1;
			$('.nav1').animate({
				left: '-100%'
			});
		}
	});
}
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('.nav1').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.nav1').animate({
				left: '-100%'
			});
		}

	});
	
	
}