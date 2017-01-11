var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'jarid.portfolio.contact@gmail.com',
    pass: process.env.PASS
  }
});

module.exports = transporter;
