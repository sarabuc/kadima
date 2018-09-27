import * as functions from 'firebase-functions';
import * as emailjs from 'emailjs/email';
//const emailjs = require("emailjs/email");

export const sendMail = functions.https.onRequest((request, response) => {
  const email     = require("./path/to/emailjs/email");
  const server    = email.server.connect({
    user:    "username",
    password:"password",
    host:    "smtp.your-email.com",
    ssl:     true
  });

  // send the message and get a callback with an error or details of the message that was sent
  server.send({
    text:    "i hope this works",
    from:    "you <username@your-email.com>",
    to:      "someone <someone@your-email.com>, another <another@your-email.com>",
    cc:      "else <else@your-email.com>",
    subject: "testing emailjs"
  }, function(err, message) { console.log(err || message); });
})
