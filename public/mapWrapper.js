const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords, info) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);

  var infowindow = new google.maps.InfoWindow({
    content: info
  });

  marker.addListener('click', function(){
    infowindow.open(this.googleMap, marker);
  });
};

MapWrapper.prototype.gotoGlasgow = function () {
  console.log("WE ARE GOING TO GLASGOW");
  this.googleMap.setCenter({lat: 55.8651, lng: -4.258});
};
