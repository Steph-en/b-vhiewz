require("dotenv").config();

const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();

router.get('/', (req, res) => {

})

app.use('/.netlify/functions/server',router);

module.exports.handler =  serverless(app);

const nodemailer = require('nodemailer');
const { Router } = require("express");

const port = process.env.PORT;

//middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
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

  const mailOptions = {
    from: req.body.email,
    to: process.env.MAIL_USERNAME_JAKE,
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent:' + info.response);
      res.send('success');
    }
  });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});