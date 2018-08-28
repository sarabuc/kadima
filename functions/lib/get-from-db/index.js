"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
/* HTTP Function to register a user */
exports.listener = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST')
        .status(200);
    /* if (req.method === `OPTIONS`) {
       res.send('options requested');
       return;
     } else {
       const bodyData = JSON.parse(req.body);
       const firstname = bodyData.firstname;
       const lastname = bodyData.lastname;
       const uid = bodyData.uid;
   
   */
    res.send('Wheeee it works! User adjusted');
    // }
});
//# sourceMappingURL=index.js.map