var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var exphbs = require('express-handlebars');

var index = require('./routes/index');
var sendmail = require('./routes/sendmail');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Blood, Sweat, and Tears');
  next();
});

app.use('/', index);
app.use('/email', sendmail);

module.exports = app;
