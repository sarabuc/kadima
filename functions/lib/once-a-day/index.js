"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// import * as admin from 'firebase-admin';
// admin.initializeApp(functions.config().firebase);
//Initial function call:
exports.do_once_a_day = functions.https.onRequest((req, res) => {
    //create database ref
    // var dbRef = admin.database().ref('/challenges');
    //do a bunch of stuff
    //send back response 
    //res.redirect(200);
    res.send(200);
});
//# sourceMappingURL=index.js.map