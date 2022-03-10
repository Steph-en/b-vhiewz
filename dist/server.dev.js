"use strict";

require("dotenv").config();

var express = require('express');

var app = express();

var nodemailer = require('nodemailer');

var port = process.env.port || 5000; //middleware

app.use(express["static"]('public'));
app.use(express.json());
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.post('/', function (req, res) {
  console.log(req.body);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });
  var mailOptions = {
    from: req.body.email,
    to: process.env.MAIL_USERNAME_JAKE,
    subject: "Message from ".concat(req.body.email, ": ").concat(req.body.subject),
    text: req.body.message
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent:' + info.response);
      res.send('success');
    }
  });
});
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});