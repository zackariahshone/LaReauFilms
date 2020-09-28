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

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'stachesites@gmail.com', // generated ethereal user
      pass: 'Zs4291994!', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email, // sender address
    to: '<lareaufilms@gmail.com>', // list of receivers
    subject: "Inquiry from: " + userName, // Subject line
    text: emailBody, 
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

});

module.exports = router;