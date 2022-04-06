const accessToken =
  'pk.eyJ1IjoibmF2ZWVuLXMiLCJhIjoiY2tzOHNncmE3MG53dDJvcGV5bTRnd3RhZyJ9.zCqfGoGuUrFQlOO6_uPCtw';
mapboxgl.accessToken = accessToken;

const setupMap = (center) => {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center, //[-74.5, 40], // starting position [lng, lat]
    zoom: 15, // starting zoom
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken,
  });
  map.addControl(directions, 'top-left');
};

const successLocation = (position) => {
  console.log(position);
  const { longitude, latitude } = position?.coords;
  setupMap([longitude, latitude]);
};

const errorLocation = () => {
  // Default location.
  setupMap([-2.24, 53.48]);
};

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});
