const initialize = function() {

  const container = document.getElementById('main-map');
  const myHouse = {lat: 56.1703, lng: -4.02793};
  const inverardochMains = {lat: 56.1503, lng: -4.12793};
  const zoom = 9;

  const map = new MapWrapper(container, myHouse, zoom);

  map.addMarker(myHouse);
  map.addMarker(inverardochMains);

  map.showInfoEvent();
}

window.addEventListener('DOMContentLoaded', initialize);
