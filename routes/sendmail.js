var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var transporter = require('../services/mail');

router.post('/', function(req, res) {

  var mailOptions = {
    to: 'jarid.portfolio.contact@gmail.com',
    subject: 'Portfolio Site',
    text: 'From: ' + req.body.name + '\r\nEmail Address: ' + req.body.email + '\r\n\r\n' + req.body.message
  };

  transporter.sendMail(mailOptions, function(err, info) {
    res.redirect('/');
  });

});

module.exports = router;
