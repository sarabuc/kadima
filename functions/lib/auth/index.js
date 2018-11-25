"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const serviceK = {
    type: "service_account",
    project_id: "kadima1-fa119",
    private_key_id: "3460e6d86842d31bbc9b025b912bd5d44565b5b6",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEhTcP8pRohjGS\nvRbPbDO/dn+xleMgeXJGD42BKXCrntsyyrf2Hfi5s2BcDwrR+OYMfvOESRI/YVq4\ncJ2y+DEN/950ktJ/lPd4TJcMZ5c42oaPKqdoKNbVpuX2ZhRrqtLJK3niceU73/Ns\n22Wg0NBCOnRwJO9/GAtZqvNBLSzn+rAXRdE4TVRNsND63qM88ez0MI2I8f5j7y5Z\nt3F9JuzwGsHvHFZn8CaXgA8g0hw9a0YZQRHJ2ChU58g187xbmiu8DyWZsE/9SEKM\nEyo7jRM0UtyfzLAs4upX9KsKApYJCZOzoaOt95MrSHYvVqCso8zBMQmEgZ27eof3\n6wvWHFkfAgMBAAECggEAKO8iqAS8WwVQwCL45F3CbaguMvxoofQKFIPa0sOh/22I\ndQz6wp49l9jAQoyzkUcKDCJJcQ2TanZJ4k862fOOrD7WxGtswzxxS7KQZ/oP6rzB\n+IJG+pA/J6OrFObwa/jaDSMsMTnOKOmeF9efVJ8KMjFg3Zcj99I3Uwcjwji5uNwG\nalV4xLma5O5oho9jFuV9l9y7rPqj7q7YDQhBvZzEcSBRiqsYtyTuXjmHL4Xvb4lX\n7Sn98lx7RCi2GR/W8W7hiQpim110N2x/rU6OLzrzr1XnE4MFAsTRBypkc49HqMR+\n1Xk9PhGVtALLKM4R3IcmiyeLWAo8izhTYxvLugIg6QKBgQDkvnegF07Kndrl9bTG\n3VfjnhR3c8BAj1+zcE+j99h16117XbY54J3QcfXLGq5nRKZdVrVa9G4tEkwiXAvx\n+PsSvQ0hrv1Y4svAUM2vcqghekI4p0+MDmfugMX9MAULFug03upiw/KiPxs7dAnc\n2ilhC6kAsi+05xwKOwen/P31bQKBgQDb787wq6E11Mrh8bfURElB2haxqi6+H9I/\nHC7yhfQOAKfY0w+FTFlz/7K1bHRnGX9msmtmfQDbpiaCsSfoEQLFgiG7y/FT1yFU\nKJa/LoPvfWMqZ5S919JSPKXmgX/Cyr7notmFYFYlkgVM95/ndffqdM/7LVGBNaT5\nG2allO9NOwKBgQCDYAFEqR5PsKnwOVZCgQ3hZQFMOebJLY9Bd9fFzKs9zpg6KnBm\nfWMmPM12gTR5iywhn5M5UfmVWVTwxvz1VJKfCIVqOx621ks/gSkhAzEdSSKPd0hw\noDWA/eS4rcO3wshK1Vy4rOHF3Yi+dL7VYVcyrYe7JpvPwoyQM6cKDHuvYQKBgQDW\nk81OueR65LVcY7x6eHUQrnpdtDAOhnVV5WVYcKB/2Nvpi2IlJyxPJDVzE/EtdY76\n3zAxudvQcPY5pCXPIGmX0TKgSoWUyttVhJQuym8mhSrvAEf6QEqOuWUS012W6r/+\ntr+KhUcHOMO7KAz2gf3y3SzdXoWajn/6GmW3PuuKaQKBgBICn9KRe1eO4NNDjeWt\nAaf1K5MbXAcG6SMmay+t4jiDRE9FmoUjf4Q5eoL/1xKGv+XyC1OibEY9qQ9pni1M\ng9QEx7gHhNMy8IpA1tt38umh3WhwZilbpOTBYsIR9V9xMQlwoAGBhBsLIzUTUzle\n/ZdH2Gtw/12pqefIOSniyaAr\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-efohj@kadima1-fa119.iam.gserviceaccount.com",
    client_id: "104680148547284339951",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-efohj%40kadima1-fa119.iam.gserviceaccount.com"
};
const firebaseConfig = {
    apiKey: "AIzaSyC39tgVZlnrGvyirclUb92ZiyCNOqcGubA",
    authDomain: "kadima1-fa119.firebaseapp.com",
    databaseURL: "https://kadima1-fa119.firebaseio.com",
    projectId: "kadima1-fa119",
    storageBucket: "kadima1-fa119.appspot.com",
    messagingSenderId: "890519841483"
};
//const firebaseAuth = new FirebaseAuthNode(firebaseConfig, serviceK)
exports.signin = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    console.log('in login');
    const email = data.email;
    const password = data.password;
    console.log(email);
    console.log(password);
    return 123;
    // firebaseAuth.signIn(email, password).then((result) => {
    //     console.log('success login');
    //     return result;
    // }).catch((err) => {
    //     console.log('error login');
    //     return -1;
    // });
}));
exports.createUser = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    admin.auth().createUser({
        email: "user@example.com",
        emailVerified: false,
        phoneNumber: "+11234567890",
        password: "secretPassword",
        displayName: "John Doe",
        photoURL: "http://www.example.com/12345678/photo.png",
        disabled: false
    })
        .then(function (userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
    })
        .catch(function (error) {
        console.log("Error creating new user:", error);
    });
}));
exports.login = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    admin.auth().verifySessionCookie;
}));
// Register a new user
// admin.auth().createUserWithEmailAndPassword(email, password)
//  .catch(function (err) {
//    // Handle errors
//  });
// Sign in existing user
// admin.auth().signInWithEmailAndPassword(email, password)
//  .catch(function(err) {
//    // Handle errors
//  });
exports.getUserByEmail = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    const email = data;
    admin.auth().getUserByEmail(email)
        .then(function (userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully fetched user data:", userRecord.toJSON());
    })
        .catch(function (error) {
        console.log("Error fetching user data:", error);
    });
}));
const get_listAllUsers = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    const nextPageToken = data;
    // Start listing users from the beginning, 1000 at a time.
    listAllUsers(nextPageToken);
}));
function listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    admin.auth().listUsers(1000, nextPageToken)
        .then(function (listUsersResult) {
        listUsersResult.users.forEach(function (userRecord) {
            console.log("user", userRecord.toJSON());
        });
        if (listUsersResult.pageToken) {
            // List next batch of users.
            listAllUsers(listUsersResult.pageToken);
        }
    })
        .catch(function (error) {
        console.log("Error listing users:", error);
    });
}
//# sourceMappingURL=index.js.map