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

    jsonResponse(req,res)(error,data);
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
  var feature = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [
        station.Location.Longitude,
        station.Location.Latitude
      ]
    },
    properties: {
      id: station.Id,
      name: station.Name,
      status: station.Status,
      address: station.Address.Street,
      city: station.Address.City,

      availableBikes: station.BikesAvailable,
      availableDocks: station.DocksAvailable,
      totalDocks: station.TotalDocks
    }
  };

  if (station.BikesAvailable === 0) {
    feature.properties.status = "Empty";
  }

  if (station.DocksAvailable === 0) {
    feature.properties.status = "Full";
  }

  return feature;
};
