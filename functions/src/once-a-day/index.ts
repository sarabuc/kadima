import * as functions from 'firebase-functions';

// import * as admin from 'firebase-admin';
// admin.initializeApp(functions.config().firebase);
//Initial function call:
export const do_once_a_day = functions.https.onRequest((req, res) => {
    //create database ref
   // var dbRef = admin.database().ref('/challenges');
    //do a bunch of stuff

    //send back response 
    //res.redirect(200);
    res.send(200);
});