//import * as tf from '@tensorflow/tfjs';
import * as functions from 'firebase-functions';
// Load the binding:
//import '@tensorflow/tfjs-node'; // Use '@tensorflow/tfjs-node-gpu' if running with GPU.
export const MLFunction = functions.https.onRequest(async (req, res) => {
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

});