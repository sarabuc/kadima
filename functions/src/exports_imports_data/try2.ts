// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import * as fs from 'fs';

// export const func = functions.https.onRequest(async (req, response) => {
//   const db = admin.firestore();
//   const collectionName = 'patient';
//   db.settings({ timestampsInSnapshots: true });

//   const data = {};
//   data[collectionName] = {};

//   const results = db.collection(collectionName)
//     .get()
//     .then(snapshot => {
//       snapshot.forEach(doc => {
//         data[collectionName][doc.id] = doc.data();
//       })
//       return data;
//     })
//     .catch(error => {
//       console.log(error);
//     })

//   results.then(dt => {
//     //getSubCollection(dt).then(() => {
//       // Write collection to JSON file
//       fs.writeFile("firestore-export.json", JSON.stringify(data), function (err) {
//         if (err) {
//           return console.log(err);
//         }
//         console.log("The file was saved!");
//     //  });
//     })
//   })

// });

// // async function getSubCollection(dt) {
// //   for (let [key, value] of Object.entries([dt[collectionName]][0])) {
// //     if (subCollection !== undefined) {
// //       data[collectionName][key]['subCollection'] = {};
// //       await addSubCollection(key, data[collectionName][key]['subCollection']);
// //     }
// //   }
// // }

// // function addSubCollection(key, subData) {
// //   return new Promise(resolve => {
// //     db.collection(collectionName).doc(key).collection(subCollection).get()
// //       .then(snapshot => {
// //         snapshot.forEach(subDoc => {
// //           subData[subDoc.id] = subDoc.data();
// //           resolve('Added data');
// //         })
// //       })
// //   })
// // }
