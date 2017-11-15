$(document).ready(function() {
	$(document).on('click', '.clob', function(){   
		$('#komplekt').modal('hide');	
		
	});	
		
	$('a[href^="#"]').click(function(){
		//Сохраняем значение атрибута href в переменной:
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});
		
	$(function() {

		var LocsA = [

			{

				lat: 55.683454,

				lon: 37.573903,

				icon: 'images/map.png',

				show_infowindow: false,

				zoom:15,

				animation: google.maps.Animation.DROP

			}

		];			

		new Maplace({

			locations: LocsA,

			map_div: '#line_11',

			controls_div: '#line_51',

			controls_type: 'list',

			controls_on_map: false,

			show_infowindow: false,

			start: 0,

			zoom:6,

		}).Load(); 

	});

});
