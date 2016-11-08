$(document).ready(function() {

$(".bxslider").bxSlider();

$(function() {
    $("#map").googleMap({
      zoom: 15, // Initial zoom level (optional)
      coords: [51.5398305,-0.1544718,17], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });
  })


});