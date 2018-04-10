const initialize = function() {

  const container = document.getElementById('main-map');
  const center = {lat: 56.1703, lng: -4.02793};
  const zoom = 9;

  const map = new MapWrapper(container, center, zoom);
}

window.addEventListener('DOMContentLoaded', initialize);
