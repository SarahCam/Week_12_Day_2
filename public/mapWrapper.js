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

MapWrapper.prototype.gotoCity = function (button, coords) {
  button.addEventListener('click', function(){
    this.googleMap.setCenter(coords);
  }.bind(this));
};

MapWrapper.prototype.displayLocation = function (position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("You are at Latitude: " + latitude + ", Longitude: " + longitude);
};

MapWrapper.prototype.gotoCurrentLocation = function (button) {
  button.addEventListener('click', function(){
    console.log("WE HAVE CLICKED THE CURRENT LOCATION BUTTON");
    navigator.geolocation.getCurrentPosition(this.displayLocation);
  }.bind(this));
};
