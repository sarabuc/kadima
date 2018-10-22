//'use strict';
import * as  functions from 'firebase-functions';
import * as  nodemailer from 'nodemailer';
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.


// [START sendWelcomeEmail]
/**
 * Sends a welcome email to new user.
 */
// [START onCreateTrigger]
export const sendWelcomeEmailFunc2 = functions.https.onRequest(async (req, res) => {
    console.log('works');
    const gmailEmail = functions.config().gmail.email;
    console.log(gmailEmail);
    const gmailPassword = functions.config().gmail.password;
    console.log(gmailPassword);
    const mailTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword,
        },
    });

    // Your company name to include in the emails
    // TODO: Change this to your app or company name to customize the email sent.
    const APP_NAME = 'קדימה לקידם תלמידים';
    const email = '5324270@gmail.com'; // The email of the user.
  
    console.log('mail: ' + gmailEmail + 'password ' + gmailPassword + 'user: ' + email);
   // const displayName = user.displayName; // The display name of the user.
    // [END eventAttributes]

    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
        subject: 'שלום לך',
        text: 'cgv hvhv cxsr'
    };

    // The user subscribed to the newsletter.
    // mailOptions['subject'] = `Welcome to ${APP_NAME}!`;
    //  mailOptions['text'] = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
     mailTransport.sendMail(mailOptions).then((result) => {
         console.log('New welcome email sent to:', email + result); 
         res.send(result); 
     }).catch((err) => {
         console.error(err);
         res.send(err);
     });
    
});
// [END sendWelcomeEmail]

// [START sendByeEmail]
/**
 * Send an account deleted email confirmation to users who delete their accounts.
 */
// [START onDeleteTrigger]
export const sendByeEmailFunc = functions.auth.user().onDelete((user) => {
    // [END onDeleteTrigger]
    const email = user.email;
    const displayName = user.displayName;

    //return sendGoodbyeEmail(email, displayName);
});


// // Sends a goodbye email to the given user.
// async function sendGoodbyeEmail(email, displayName) {
//     const mailOptions = {
//         from: `${APP_NAME} <noreply@firebase.com>`,
//         to: email,
//     };

//     // The user unsubscribed to the newsletter.
//     mailOptions['subject'] = `Bye!`;
//     mailOptions['text'] = `Hey ${displayName || ''}!, We confirm that we have deleted your ${APP_NAME} account.`;
//     await mailTransport.sendMail(mailOptions);
//     console.log('Account deletion confirmation email sent to:', email);
// }