var fetchBikeSantiago = require('../fetchers/bike_santiago');
var jsonResponse = require('./json_response');

module.exports = function(req,res) {
  fetchBikeSantiago(jsonResponse(req,res));
};
