function initMap(){

  var position={lat:41.9250, lng:87.6339};
  var map= new google.maps.Map(document.getElementsById('map'), {center:position, zoom:15});



  var marker=new google.maps.Marker({
    position:position,
    map:map,
    icon:'images/pin.png'
  });
}
window.addEventListener('load', initMap);


var slideCounter= 1;
showSlides(slideCounter);

function plusSlides(n) {
  showSlides((slideCounter += n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideCounter = 1;
  }
  if (n < 1) {
    slideCounter= slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
