const express = require('express');
//const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/sendmail', function(req, res){
    console.log( 'from server', req.body);
    const email = req.body.email;
    const emailBody = req.body.emailBody;
    const userName = req.body.userName;
    
    
"use strict";
const nodemailer = require("nodemailer");



  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: 'lareaufilms@gmail.com', 
      pass: 'lareau01234', 
    },
  });

  
    transporter.sendMail({
    from: email, 
    to: '<lareaufilms@gmail.com>',
    subject: "From www.lareaufilms.com: " + userName + ' wants to talk.', // Subject line
    text: emailBody, 
  }); 



  res.send('got the data')
});

module.exports = router;