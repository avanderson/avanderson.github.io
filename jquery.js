$(document).ready(function() {

$(".bxslider").bxSlider({
	auto: true,
	autoControls: false,
	controls: false,
	pause: 4000,
	infiniteLoop: true,
	mode: 'horizontal',
	autoDirection: 'next',
	responsive: true,
	autoDelay: 0,
	randomStart: false,
	pager: false,
	moceSlideQty: 1,
	useCSS: false,	
	adaptiveHeight: true
});

$(function() {
    $("#map").googleMap({
      zoom: 15, // Initial zoom level (optional)
      coords: [51.5398305,-0.1544718,17], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });
		})

$("#contactUs").click(function () {
	$("dialog").dialog("open");
	return false;
});

});