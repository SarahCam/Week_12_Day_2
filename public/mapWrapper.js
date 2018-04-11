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
    map: this.googleMap,
    icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
  });

  var infowindow = new google.maps.InfoWindow({
    content: info
  });

  marker.addListener('click', function(){
    infowindow.open(this.googleMap, marker);
  });

  return marker;
};

// // Jim's solution:
// MapWrapper.prototype.addInfoWindow = function (text) {
//   const info = new google.maps.InfoWindow({
//     content: text
//   });
// };


MapWrapper.prototype.gotoCity = function (button, coords) {
  button.addEventListener('click', function(){
    this.googleMap.setCenter(coords);
    console.log(coords);
  }.bind(this));
};

MapWrapper.prototype.displayLocation = function (position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("You are at Latitude: " + latitude + ", Longitude: " + longitude);
  var coords = {lat: position.coords.latitude, lng: position.coords.longitude};
  console.log(coords);
  this.googleMap.setCenter(coords);
};

MapWrapper.prototype.gotoCurrentLocation = function (button) {
  button.addEventListener('click', function(){
    console.log("WE HAVE CLICKED THE CURRENT LOCATION BUTTON");
    navigator.geolocation.getCurrentPosition(this.displayLocation);
  }.bind(this));
};


MapWrapper.prototype.goToPlace = function (coords) {
    this.googleMap.setCenter(coords);
    console.log(coords);
};
