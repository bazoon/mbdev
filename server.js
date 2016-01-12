var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('*', function (req, res) {
  res.render('index');
});

app.listen(8080, function () {
  console.log('started on 8080!');
});
