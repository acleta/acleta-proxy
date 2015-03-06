module.exports = function (req, res) {
  return function (error, data) {
    if (error) {
      res.status(500);
    } else {
      res.status(200);
    }

    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  };
};
