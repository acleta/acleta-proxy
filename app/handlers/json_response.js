module.exports = function (req, res) {
  return function (error, data) {
    if (error) {
      res.status(500);
    } else {
      res.status(200);
    }

    res.set('Content-Type', 'application/json');
    res.set('Cache-Control', 'public, max-age=180');
    res.send(JSON.stringify(data));
  };
};
