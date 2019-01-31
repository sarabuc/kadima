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
//import * as tf from '@tensorflow/tfjs';
const functions = require("firebase-functions");
// import * as admin from 'firebase-admin';
// import * as request from 'request';
//import '@tensorflow/tfjs-node'; // Use '@tensorflow/tfjs-node-gpu' if running with GPU.
exports.sendData = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    //     const db = admin.firestore();
    //     const newDocs = await db.collection('ML_data').where('sent', '==', false).get();
    //     console.log(newDocs);
    //     const newDocsToSend = newDocs.docs.map(doc => doc.data());/*({Pid: doc.data().Pid,
    //          method: doc.data().method,
    //           diffi: doc.data(),
    //            birth_year: doc.data().birth_year,
    //             progress: doc.data().progress }));*/
    // //send to ml db - to other firebase function will copy all
    // console.log(newDocsToSend);
    // const my_data = {newDocs: newDocsToSend};
    // // make the request
    // request.post({
    //     url:     'https://us-central1-ml-database.cloudfunctions.net/getAndSaveData',
    //     body:    JSON.stringify(my_data)
    //   }, function(error, response, body){
    //       console.log(response);
    //     if (!error && response.statusCode == 200) {
    //         //here put what you want to do with the request
    //         for (const doc of newDocs.docs) {
    //             const docId = doc.id;
    //             db.collection('ML_data').doc(docId).update({sent: true});
    //         }
    //         res.send("success");
    //     } else {
    //         console.log(error);
    // res.send('error')    }  });
}));
//function markSentLines()
// Train a simple model:
// const model = tf.sequential();
// model.add(tf.layers.dense({ units: 100, activation: 'relu', inputShape: [10] }));
// model.add(tf.layers.dense({ units: 1, activation: 'linear' }));
// model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
// const xs = tf.randomNormal([100, 10]);
// const ys = tf.randomNormal([100, 1]);
// model.fit(xs, ys, {
//     epochs: 100,
//     callbacks: {
//         onEpochEnd: async(epoch, log) => {
//             console.log(`Epoch ${epoch}: loss = ${log.loss}`);
//         }
//     }
// });
//# sourceMappingURL=index.js.map