"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
//export const getFromDbFunc = getFromDB.listener;
// export const helloWorld = functions.https.onRequest((req, response) => {
// response.send('hello from firebase');
// });
exports.onPatientUpdate = functions.firestore.document('patients/312547870').onUpdate(change => {
    const after = change.after.data();
    const payloud = {
        data: {
            id: after.id,
            name: after.firstName
        }
    };
    return admin.messaging().sendToTopic('pati', payloud)
        .catch(error => {
        console.error('faild', error);
    });
});
//# sourceMappingURL=index.js.map