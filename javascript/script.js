function initMap(){

  var position={lat:41.9250, lng:87.6339};
  var map= new google.maps.Map(document.getElementsById('map'), {center:position, zoom:15};



  var marker=new google.maps.Marker({
    position:position,
    map:map,
    icon:'images/pin.png'
  });
}
window.addEventListener('load', initMap);
