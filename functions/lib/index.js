"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
admin.initializeApp();
const getFromFirebase = require("./get-from-db-storage");
//import * as ML from './ML';
//import {find} from 'p-iteration';
const import_export = require("./exports_imports_data");
// admin.initializeApp(functions.config().firebase);
exports.im_ex = import_export.getAllPatientsDataInCSV;
exports.getMipuysForPatient = getFromFirebase.getMipuysForPatient;
exports.getOneMipuyByDateAndId = getFromFirebase.getOneMipuyByDateAndId;
exports.getMainDiffiAreas = getFromFirebase.getMainDiffiAreas;
//export const getMethodWithML = ML.MLFunction;
//   //have to check for each diffi if it is a leave-
//   //do it so-
//   // prefer to enter new object {code, father } to list and check if there is in list {father, x} or { x, code},
//   //if there is {father, x}- have to remove { father, x} and update new object to {code, x}
//   // if there is {x, code} - have update existing obgect {x, code} to {x, father} and throw new object
//   const findD = allDiffi.docs.find(D => D.data().code === diffi.data().Dcode);
//   if (!findD) {
//     continue;
//   }
//   const newDiff = {
//     code: findD.data().code,
//     father: findD.data().Dfather
//   }
//   let i = mipuyDiffis.findIndex(D => D.father === newDiff.code); //{x, code} - have update existing obgect {x, code} to {x, father} and throw new object
//   if (i > -1) {
//     mipuyDiffis[i].father = newDiff.father;
//     continue;
//   }
//   i = mipuyDiffis.findIndex(D => D.code === newDiff.father); //{father, x}- have to remove { father, x} and update new object to {code, x}
//   if (i > -1) {
//     if(mipuyDiffis[i].father !== 'null') {
//       newDiff.father = mipuyDiffis[i].father;
//       mipuyDiffis.splice(i, 1);
//     }
//     mipuyDiffis.push(newDiff);
//   }
//  mipuyDiffis.push(newDiff); // ????????delete
// export const getMipuyForPatientByDate = functions.https.onCall(async (data, context) => {
//   try {
//     const text = data.text.split('*');
//     const Pid  = text[0];
//     const mipuyD = text[1];
//     console.log('params' + Pid + mipuyD);
//     // const db = admin.firestore();
//     const allDiffi = await db.collection('difficults').get();
//       const mipuyDetails: { [k: string]: any } = {};
//       let mipuyDiffis = [];
//       const diffiForPatient = await db.collection('patientDifficults').where('Pid', '==', Pid).where('mipuyDate', '==', mipuyD).where('status', '==', 'yes').get();
//       console.log('all diffi for patient' + diffiForPatient.docs.length);
//       for (const diffi of diffiForPatient.docs) {
//         if (mipuyDiffis.indexOf(diffi.data().Dcode) > -1) {
//           // this difficult was enterd (his child)- have to do nothing
//           continue;
//         } else {
//           let findD; //await find(allDiffi.docs, (D) => D.data().code === diffi.data().Dcode);// allDiffi.docs.find(D => D.data().code === diffi.data().Dcode);
//           for (const D of allDiffi.docs) {
//             if (D.data().code === diffi.data().Dcode) {
//               findD = D;
//               break;
//             }
//           }
//           const fathers = ('' + findD.data().allFathers).split('*');
//           const mainFather = fathers[0];
//           if (findD.data().Dfather === 'null') {
//             console.log('fatherisnull' + diffi.data().Dcode);
//             mipuyDetails[diffi.data().Dcode] = [];
//             mipuyDetails[diffi.data().Dcode].push(diffi.data().Dcode);
//           } else if (!mipuyDetails[mainFather] && findD.data().Dfather != 'null') {
//             //if it is already underfind - didnt enter any diffrents in this area
//             console.log('new area ' + diffi.data().Dcode);
//             mipuyDetails[mainFather] = [];
//             mipuyDetails[mainFather].push(diffi.data().Dcode);
//             mipuyDiffis = mipuyDiffis.concat(fathers);
//           } else {
//             let flag = false;
//             // diff was not entered but maybe his father was entered- have to change him if was - if not have to push to areas array
//             // check if  one of his fathers was entered
//             for (const father of fathers) {
//               const i = mipuyDetails[mainFather].indexOf(father);
//               if (i > -1) {
//                 // have replace
//                 console.log('have replace' + mipuyDetails[mainFather][i] + diffi.data().Dcode);
//                 mipuyDetails[mainFather][i] = diffi.data().Dcode;
//                 flag = true;
//                 break;
//               }
//             } // end of for- there was not any father
//             if (!flag) {
//               // have to push to areas array
//               console.log('new leave in area' + diffi.data().Dcode);
//               mipuyDetails[mainFather].push(diffi.data().Dcode);
//               mipuyDiffis = mipuyDiffis.concat(fathers);
//             }
//           }
//         }
//       }
//     return mipuyDetails;
//   } catch (error) {
//     return error;
//   }
// });
// function recorsiveFindLeavs(mipuy: any, area: string, mainArea: string, diffiForPatient: any[], allDiffi: any[]) {
// }
// var stuff = [];
// var db = admin.firestore();
// db.collection("Users").doc("7vFjDJ63DmhcQiEHwl0M7hfL3Kt1").collection("blabla").get().then(snapshot => {
//   snapshot.forEach(doc => {
//     var newelement = {
//       "id": doc.id,
//       "xxxx": doc.data().xxx,
//       "yyy": doc.data().yyy
//     }
//     stuff = stuff.concat(newelement);
//   });
//   res.send(stuff)
// export const addMessage = functions.https.onRequest(async (req, res) => {
//   // [END addMessageTrigger]
//   // Grab the text parameter.
//   const original = "new massege";//req.query.text;
//   // [START adminSdkAdd]
//   // Push the new message into the Realtime Database using the Firebase Admin SDK.
//   const writeResult = await admin.firestore().collection('messages').add({ original: original });
//   // Send back a message that we've succesfully written the message
//   res.json({ result: `Message with ID: ${writeResult.id} added.` });
//   // [END adminSdkAdd]
// });
// [END addMessage]
// [START makeUppercase]
// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
// [START makeUppercaseTrigger]
// export const makeUppercase = functions.firestore.document('/messages/{documentId}')
//   .onCreate((snap, context) => {
//     // [END makeUppercaseTrigger]
//     // [START makeUppercaseBody]
//     // Grab the current value of what was written to the Realtime Database.
//     const original = snap.data().original;
//     console.log('Uppercasing', context.params.documentId, original);
//     const uppercase = original.toUpperCase();
//     // You must return a Promise when performing asynchronous tasks inside a Functions such as
//     // writing to the Firebase Realtime Database.
//     // Setting an 'uppercase' sibling in the Realtime Database returns a Promise.
//     return snap.ref.set({ uppercase }, { merge: true });
//     // [END makeUppercaseBody]
//   });
// // [END makeUppercase]
// // [END all]
//# sourceMappingURL=index.js.map