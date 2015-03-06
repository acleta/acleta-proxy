var fetchBikeSantiago = require('../fetchers/bike_santiago');
var jsonResponse = require('./json_response');

module.exports = function(req,res) {
  fetchBikeSantiago(function (error,data) {
    if (!error) {
      data = {
        type: "FeatureCollection",
        features: data.map(convertStationToFeature)
      };
    }

    jsonResponse(error,data);
  });
};

/*
 * Sample Response from the webservice:
 {
    "Id": 2458,
    "PublicText": "",
    "Name": "El Ciruelillo",
    "Address": {
      "Street": "Alonso de Córdova / El Ciruelillo",
      "City": "Comuna de Vitacura, Santiago",
      "State": null,
      "ZipCode": "",
      "Country": "United States",
      "Html": "Alonso de Córdova / El Ciruelillo<br />Comuna de Vitacura, Santiago"
    },
    "Location": {
      "Latitude": -33.40296,
      "Longitude": -70.59038
    },
    "BikesAvailable": 5,
    "DocksAvailable": 10,
    "TotalDocks": 15,
    "HoursOfOperation": "06:00 - 23:00",
    "TimeZone": "(UTC-03:00) Buenos Aires",
    "Status": "Unavailable",
    "IsEventBased": false
  }
*/
function convertStationToFeature(station) {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [
        station.Location.Latitude,
        station.Location.Longitude,
        0
      ]
    },
    properties: {
      id: station.Id,
      status: station.Status
    }
  };
};
