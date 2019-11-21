// Creating map object
var map = L.map("map", {
    center: [37.00, -95.00],
    zoom: 3,
    //layers: [circleLayer]
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: 'pk.eyJ1IjoiZWFzaGF3OCIsImEiOiJjazJycmxlYjYwY3o0M3BtbnJsZnRnbWYxIn0.IHWTDEyBaP4fCRSrhOdcPQ',
}).addTo(map);


var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

function size(magnitude) {
    return magnitude * 20000;
};

// Grabbing our GeoJSON data..
d3.json(link, function (data) {

    console.log(data);

    function size(mag) {
        return mag * 20000;
    };

    // createLocations(data.features);
    // // });
    var location = data.features[i];

    for (var i = 0; i < data.features.length; i++) {
        var location = data.features[i];
        //console.log(data.features[i]);

        // if (location) {
        //     var marker = L.marker([location.geometry.coordinates[1], location.geometry.coordinates[0]]).addTo(map);
            //console.log([location.geometry.coordinates[1], location.geometry.coordinates[0]]);

        //}
    


    }

    L.geoJSON(data, {


        pointToLayer: function (data, latlng) {
            return L.circle(latlng, { radius: size(location.properties.mag) });
        },
                style: function(location) {
                    return {
                        fillColor: chooseColor(location.properties.mag),
                        color: "black",
                        weight: 1,
                        opacity: 0.75,
                        fillOpacity: 0.8
                    }
                },
    
    
    
        
    }).addTo(map);
});

function chooseColor(mag) {

    if (mag < 1) {
        return "yellow"
    }
    else if (mag < 2) {
        return "red"
    }
    else if (mag < 3) {
        return "orange"
    }
    else if (mag < 4) {
        return "green"
    }
    else {
        return "purple"
    }


};






