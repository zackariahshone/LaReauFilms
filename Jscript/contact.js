    
    
// key: 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

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'zackariahshone@gmail.com',
  from: 'stachesites@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);

