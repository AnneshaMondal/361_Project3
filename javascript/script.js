function initMap(){

  var position={lat:41.9250, lng:87.6339};
  var map= new google.maps.Map(document.getElementsById('map'), {center:position, zoom:15};

  var view=new google.maps.InfoWindow({
    content:'Caldwell Lily Pond, Lincoln Park Zoo'

  });

  var marker=new google.maps.Marker({
    position:position,
    map:map,
    icon:'images/pin.png'
  });

  marker.addListener('click', function(){
    view.open(map,marker);

  });

});
