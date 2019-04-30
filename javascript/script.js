
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.9250, lng: 87.6339},
		zoom: 8
	});
}


var slideCounter = 1;
slides();

function addSlide(n) {
  slides((slideCounter += n));
}
function slides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideCounter = 1;
  }
  if (n < 1) {
    slideCounter = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideCounter - 1].style.display = "block";
}
