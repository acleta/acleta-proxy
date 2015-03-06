var app = require('./app/application');
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Proxy listening at http://0.0.0.0:%s', port);
})
