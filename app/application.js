var express = require('express')

var app = express();

app.get('/bike-santiago.json', require('./handlers/bike_santiago_proxy') );
app.get('/bike-santiago.geojson', require('./handlers/bike_santiago_converter') );
app.get('/*', require('./handlers/dataset_proxy') );

module.exports = app;
