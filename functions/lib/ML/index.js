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
// Load the binding:
//import '@tensorflow/tfjs-node'; // Use '@tensorflow/tfjs-node-gpu' if running with GPU.
exports.MLFunction = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
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
    res.send(200);
}));
//# sourceMappingURL=index.js.map