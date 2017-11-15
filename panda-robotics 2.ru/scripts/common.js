$(document).ready(function(){var o=[{lat:55.683454,lon:37.573903,icon:"images/map.png",show_infowindow:!1,zoom:15,animation:google.maps.Animation.DROP}];new Maplace({locations:o,map_div:"#line_11",controls_div:"#line_51",controls_type:"list",controls_on_map:!1,show_infowindow:!1,start:0,zoom:6}).Load()}),$(document).ready(function(){var o=function(o,n,t,i,a){null!==n&&$($("li","#thumbs")[n]).animate({opacity:.6}),$($("li","#thumbs")[o]).animate({opacity:1})},n=function(){$("a","#thumbs").each(function(){$(this).unbind(),$(this).click(function(){var o=$($(this).parents("li").get(0)).attr("id").substring(6);return $("#photos").xfadeTo($("#photo-"+o)),!1})})};$(document).ready(function(){$("#photos").xfade({height:430,onBefore:o}),n()})});

// какой-то вася сжал скрипт, приходится дописывать прям сюда
$(document).ready(function() {

	// передаем название заказываемого товара в модальное окно
	$('#zakaz').on('show.bs.modal', function(e) {
		var trigger = $(e.relatedTarget),
			inputProduct = $(this).find('input[name="product"]');
		
		inputProduct.val(trigger.data('product'));
	});

});