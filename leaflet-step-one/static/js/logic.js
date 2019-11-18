// Creating map object
var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: 'pk.eyJ1IjoiZWFzaGF3OCIsImEiOiJjazJycmxlYjYwY3o0M3BtbnJsZnRnbWYxIn0.IHWTDEyBaP4fCRSrhOdcPQ',
  }).addTo(map);
  
  // If data.beta.nyc is down comment out this link
  // var link = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
  // "35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";
  
  // Uncomment this link local geojson for when data.beta.nyc is down
  var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";
  
//   // Function that will determine the color of a neighborhood based on the borough it belongs to
//   function chooseColor(borough) {
//     switch (borough) {
//     case "Brooklyn":
//       return "yellow";
//     case "Bronx":
//       return "red";
//     case "Manhattan":
//       return "orange";
//     case "Queens":
//       return "green";
//     case "Staten Island":
//       return "purple";
//     default:
//       return "black";
//     }
//   }
  
  // Grabbing our GeoJSON data..
  d3.json(link, function(response) {

    console.log(response);
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i].location;
  
      if (location) {
        L.marker([properties.geometry.coordinates[1], properties.geometry.coordinates[0]]).addTo(myMap);
      }
    }
  
  });