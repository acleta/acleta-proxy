var express = require('express')

var app = express();

app.get('/sets/services/bike-santiago.json', require('./handlers/bike_santiago_proxy') );
app.get('/sets/services/bike-santiago.geojson', require('./handlers/bike_santiago_converter') );
app.get('/sets/*', require('./handlers/dataset_proxy') );

module.exports = app;
