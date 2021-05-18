var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, '/')));
app.get('/', function (req, res) {
  res.redirect('/template/index.html');
});
var server = app.listen(8081, function (res) {
  console.log(`应用实例，访问地址为 http://localhost:8081`);
});
