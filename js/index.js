function initMap() {
  var ottawa = {
    lat: 45.4215,
    lng: -75.6972,
  };
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    mapTypeId: "roadmap",
    zoom: 11,
    center: ottawa,
  });
}
