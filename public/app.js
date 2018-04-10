const initialize = function() {

  const container = document.getElementById('main-map');
  const myHouse = {lat: 56.1703, lng: -4.02793};
  const inverardochMains = {lat: 56.1503, lng: -4.12793};
  const glasgow = {lat: 55.8651, lng: -4.258};
  const zoom = 9;

  const map = new MapWrapper(container, myHouse, zoom);

  map.addMarker(inverardochMains, "Inverardoch Mains");
  map.addMarker(myHouse, "My House");

  const gotoGlasgowButton = document.getElementById('button-goto-glasgow');
  gotoGlasgowButton.addEventListener('click', map.gotoGlasgow.bind(map));


}

window.addEventListener('DOMContentLoaded', initialize);
