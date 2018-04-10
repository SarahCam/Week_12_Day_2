const initialize = function() {

  const container = document.getElementById('main-map');
  const myHouse = {lat: 56.1703, lng: -4.02793};
  const inverardochMains = {lat: 56.1503, lng: -4.12793};
  const glasgow = {lat: 55.8651, lng: -4.258};
  const edinburgh = {lat:55.953251, lng: -3.188267};
  const zoom = 9;

  const map = new MapWrapper(container, myHouse, zoom);

  map.addMarker(myHouse, "My House");
  map.addMarker(inverardochMains, "Inverardoch Mains");

  const gotoGlasgowButton = document.getElementById('button-goto-glasgow');
  map.gotoCity(gotoGlasgowButton, glasgow);

  const gotoEdinburghButton = document.getElementById('button-goto-edinburgh');
  map.gotoCity(gotoEdinburghButton, edinburgh);
}

window.addEventListener('DOMContentLoaded', initialize);
