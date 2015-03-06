var fetchJSON = require('./json');

module.exports = function (path, callback) {
  fetchJSON({
    url: "https://raw.githubusercontent.com/acleta/acleta-datasets/master" + path
  }, callback);
};

