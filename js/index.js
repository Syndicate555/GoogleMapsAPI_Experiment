function initMap() {
  var sydney = {
    lat: -33.863276,
    lng: 151.107977,
  };
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    mapTypeId: "roadmap",
    zoom: 11,
    center: sydney,
  });
}
