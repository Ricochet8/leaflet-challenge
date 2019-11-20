// Creating map object
var map = L.map("map", {
    center: [37.00, -95.00],
    zoom: 3
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: 'pk.eyJ1IjoiZWFzaGF3OCIsImEiOiJjazJycmxlYjYwY3o0M3BtbnJsZnRnbWYxIn0.IHWTDEyBaP4fCRSrhOdcPQ',
}).addTo(map);


var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";



// Grabbing our GeoJSON data..
d3.json(link, function (data) {

    console.log(data);

    // createLocations(data.features);
    // // });

    for (var i = 0; i < data.features.length; i++) {
        var location = data.features[i];
        console.log(data.features[i]);

        if (location) {
            L.marker([location.geometry.coordinates[1], location.geometry.coordinates[0]]).addTo(map);
            console.log([location.geometry.coordinates[1], location.geometry.coordinates[0]]);
        
        }
    }
});

// function createLocations(earthquakeData) {
//      L.geoJSON(earthquakeData,

//         function (earthquakeData, latlng) {
//             return L.circle(latlng, { radius: size(earthquakeData.properties.mag) });
//         },

//         function (geoJsonFeature) {
//             return {
//                 fillColor: circleColor(geoJsonFeature.properties.mag),
//                 fillOpacity: 0.75,
//                 weight: 0.5,
//                 color: 'black'
//             }
//         },


//     )
// };



