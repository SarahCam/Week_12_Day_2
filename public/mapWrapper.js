const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
};

// MapWrapper.prototype.addClickEvent = function () {
//   google.maps.event.addListener(this.googleMap, 'click', function(event){
//   const coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};      // where I have clicked:
//   this.addMarker(coords);                                                 // add a marker
//   }.bind(this));
// };

// var contentString = "Testing";
//
// var infowindow = new google.maps.InfoWindow({
//     content: contentString
// });

MapWrapper.prototype.showInfoEvent = function () {
  console.log("mouseover test");
  for(marker of this.markers){
    google.maps.event.addListener(marker, 'mouseover', function(event){
    console.log(event.latLng.lat());
    var infowindow = new google.maps.InfoWindow({
      content: "Test"
    });
    infowindow.open(this.googleMap, marker);
    }.bind(this));
  }
};
