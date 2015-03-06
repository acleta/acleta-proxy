var request = require("request");

module.exports = function (options, callback) {
  request(options, function (error, response, body) {
    if (error) { callback(error, {}); }

    if (response.statusCode === 200) {
      try {
        callback(null, JSON.parse(body) );
      } catch (error) {
        callback(error, {});
      }
    } else {
      callback(true,{});
    }
})
};
