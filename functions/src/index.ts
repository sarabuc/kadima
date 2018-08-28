import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as getFromDB from './get-from-db';
import { request } from 'http';


admin.initializeApp(functions.config().firebase);

//export const getFromDbFunc = getFromDB.listener;
// export const helloWorld = functions.https.onRequest((req, response) => {
// response.send('hello from firebase');
// });

export const onPatientUpdate = functions.firestore.document('patients/312547870').onUpdate(change => {
const after = change.after.data();
const payloud  = {
  data: {
    id: after.id,
    name: after.firstName
  }
}
return admin.messaging().sendToTopic('pati', payloud)
.catch(error => {
  console.error('faild', error);
});
});

