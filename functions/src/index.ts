import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

export const getMainDiffiAreas = functions.https.onCall(async (data, context) => {
  try {
   // const db = admin.firestore();
    const mainAreas = await db.collection('difficults').where('Dfather', '==', 'null').get();
    const areas = [];
    for(const  doc of mainAreas.docs) {
      const D = {
        code:doc.data().code,
        index: doc.data().index,
        allFathers: doc.data().allFathers
      };

    areas.push(D);
    }
    return areas;

  } catch (error) {
    return error;
  }

});
export const getMipuysForPatient = functions.https.onCall(async (data, context) => {
  try {

    const Pid = data.text;
    // const db = admin.firestore();

    const mipuys = await db.collection('mipuy').where('Pid', '==', Pid).get();
    if (mipuys.size <= 0) {
     return 'no-mipuy';
    }

    const allDiffi = await db.collection('difficults').get();
    const mainAreas = await db.collection('difficults').where('Dfather', '==', 'null').get();
    const allMipuysForPatient = [];

    for (const doc of mipuys.docs) { // run on all mipuys for patient
      const mipuyD = doc.data().mipuyDate;
      const mipuyDetails = {
        mipuyDate: mipuyD,
        difficults: []
      }//: { [k: string]: any } = {};
      const mipuyDiffis = [];

      //mipuyDetails['mipuyDate'] = mipuyD;


      const diffiForPatient = await db.collection('patientDifficults').where('Pid', '==', Pid).where('mipuyDate', '==', mipuyD).where('status', '==', 'yes').get();

      for (const area of mainAreas.docs) { // run on all main areas in each mipuy
        const flag = diffiForPatient.docs.findIndex(D => D.data().Dcode === area.data().code);
        if (flag > -1) {
          //there is this difficult in this mipuy
          const newDiff= { //{code, code}
            code: diffiForPatient.docs[flag].data().code,
            father: diffiForPatient.docs[flag].data().code
          };
          mipuyDiffis.push(newDiff);
        diffiForPatient.docs.splice(flag, 1); // dont need more this doc in array
        }
      }
         for (const diffi of diffiForPatient.docs) {
            //have to check for each diffi if it is a leave-
            //do it so-
            // prefer to enter new object {code, father } to list and check if there is in list {father, x} or { x, code},
            //if there is {father, x}- have to remove { father, x} and update new object to {code, x}
            // if there is {x, code} - have update existing obgect {x, code} to {x, father} and throw new object
            const findD = allDiffi.docs.find(D => D.data().code === diffi.data().Dcode);
            if (!findD) {
              continue;
            }
            const newDiff = {
              code: findD.data().code,
              father: findD.data().Dfather
            }
            let i = mipuyDiffis.findIndex(D => D.father === newDiff.code); //{x, code} - have update existing obgect {x, code} to {x, father} and throw new object
            if (i > -1) {
              mipuyDiffis[i].father = newDiff.father;
              continue;
            }
            i = mipuyDiffis.findIndex(D => D.code === newDiff.father); //{father, x}- have to remove { father, x} and update new object to {code, x}
            if (i > -1) {
              if(mipuyDiffis[i].father !== 'null') {
                newDiff.father = mipuyDiffis[i].father;
                mipuyDiffis.splice(i, 1);
              }

              mipuyDiffis.push(newDiff);
            }

           mipuyDiffis.push(newDiff); // ????????delete
        }
      mipuyDetails.difficults = mipuyDiffis;
      allMipuysForPatient.push(mipuyDetails);

      }
    return allMipuysForPatient;

   // response.status(200).send(JSON.stringify(allMipuysForPatient));
  } catch (error) {
   return error;
  }

});




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
