var app = require('./app/application');

app.listen(3000, function () {
  console.log('Proxy listening at http://0.0.0.0:%s', 3000);
})
