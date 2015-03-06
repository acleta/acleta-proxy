var fetchJSON = require('./json');
var API_KEY = '1F461F9D-F1AF-4B0D-8B26-5DE7AE53FD9D';

module.exports = function (callback) {
  fetchJSON({
    url: "https://publicapi.bcycle.com/api/1.0/ListProgramKiosks/68",
    headers: {
      APIKey: API_KEY
    }
  }, callback);
};
