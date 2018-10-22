"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const functions = require("firebase-functions");
const request = require("request");
//import * as sgMail from '@sendgrid/mail';
exports.helloWorld = functions.https.onRequest((req, response) => {
    request.get('https://afternoon-atoll-13086.herokuapp.com', function (error, respo, body) {
        console.log('error:', error); // Print the error if one occurred 
        console.log('statusCode:', respo && respo.statusCode); // Print the response status code if a response was received 
        console.log('body:', body); //Prints the response of the request. 
    });
    // https.get('https://afternoon-atoll-13086.herokuapp.com/', resp => {
    //   let data = '';
    //   // A chunk of data has been recieved.
    //   resp.on('data', chunk => {
    //     data += chunk;
    //   });
    //   // The whole response has been received. Print out the result.
    //   resp.on('end', () => {
    //     console.log(JSON.parse(data).explanation);
    //   });
    // }).on("error", err => {
    //   console.log("Error: " + err.message);
    // });
});
/*const SENDGRID_API_KEY = firebaseConfig.sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);*/
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.setApiKey(functions.config().sendgrid.key);
// const msg = {
//   to: 'sm5800810@gmail.com', // user.email,
//   from: 'kadima1313@gmail.com',
//   subject: 'New Follower',
//   text: 'and easy to do anywhere, even with Node.js',
// custom templates
//templateId: 'd-da927ddaea9e4881a36fcdad722e4751',
//substitutionWrappers: ['{{', '}}'],
// substitutions: {
//   name: user.displayName
//   // and other custom properties here
// }
//};
// const msg = {
//   to: 'sm5800810@gmail.com',
//   from: 'kadima1313@gmail.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.error(err);
// });
//   response.status(200).send('success');
// });
/*<html>
    <head>
      <title></title>
  
    </head>
    <body style="text-align:center" >
      <h1 style="font-size:60px ; color:purple">תזכורת</h1>
      <br>
     <p>   לעדכן תכנון טיפול עבור </p>
    <a href="https://kadima1-fa119.firebaseapp.com">למעבר לקדימה לחץ כאן</a>
      <img src='https://marketing-image-production.s3.amazonaws.com/uploads/30ab38917bc6e6ffbea84335d03054a13d615e494db8ec16da445acbef9a379e5f4a3de5b6ddd4fefd8ed190bceb307b0dd45403b4f638110ddac98c5ad7e1d8.png' class="center w-50" alt="">
       <style>
        .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        }
        .w-50 {
           width: 50%;
        }
        </style>
      
    </body>
  
    </html>
  */ 
//# sourceMappingURL=index_by_sendgrid_huroku.js.map