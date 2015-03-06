var fetchDataSet = require('../fetchers/data_set');
var jsonResponse = require('./json_response');

module.exports = function(req,res) {
  fetchDataSet(jsonResponse(req,res));
};
