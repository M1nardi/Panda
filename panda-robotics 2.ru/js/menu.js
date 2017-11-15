$(document).ready(function(){

//$(".hassub").hover(function(){$(".sub").toggleClass("active_hover");});
$(".hassub").hover(function(){$(this).toggleClass("active");});
$(".glyphicon-menu-hamburger").click(function(){
	$(".glyphicon-menu-hamburger").toggleClass("active");
	$(".glyphicon-remove").toggleClass("active");
	$(".menu").toggleClass("active");
	});
$(".glyphicon-remove").click(function(){
	$(".glyphicon-remove").toggleClass("active");
	$(".glyphicon-menu-hamburger").toggleClass("active");
	$(".menu").toggleClass("active");
	});

$(".hassub").click(function(){$(".sub").toggleClass("active");});

});