var fetchDataSet = require('../fetchers/data_set');
var jsonResponse = require('./json_response');

module.exports = function(req,res) {
  fetchDataSet(req.url, jsonResponse(req,res));
};
