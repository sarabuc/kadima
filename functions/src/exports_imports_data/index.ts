// const admin = require("firebase-admin");
import * as fs from 'fs';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as path from 'path';
import * as os from 'os';
import * as writeJsonFile from 'write-json-file';
//const gcs = require('@google-cloud/storage')();
const spawn = require('child-process-promise').spawn;

//const bucketPath = 'MYPROJECTNAME.appspot.com'
//const serviceAccount = require("./serviceAccountKey.json");
const collectionName = 'patients';
const db = admin.firestore();
const storage = admin.storage();
db.settings({ timestampsInSnapshots: true });

const data = {};
data[collectionName] = {};

export const getAllPatientsDataInCSV = functions.https.onCall(async(data1, context) => {
  try {

    const file = 'patientData.json';

    const results = await db.collection(collectionName).get();
    console.log(results);
    console.log('size' + results.size);
    for (const doc of results.docs) {
      data[collectionName][doc.id] = doc.data();
console.log(doc);
    }
    // return data;
    //const fileBucket = object.bucket;
    console.log(data);
    const tempFilePath = path.join(os.tmpdir(), file);
    //const bucket = gcs.bucket(tempFilePath);
    console.log('tmp + ' + tempFilePath);
    writeJsonFile.sync(tempFilePath, JSON.stringify(data));
    const read = fs.readFileSync(tempFilePath);
    console.log(read);

    const exe_file = 'exe/' + file;
    const thumbFilePath = path.join(path.dirname(file), exe_file);
      storage.bucket('kadima1-fa119.appspot.com').upload(tempFilePath, {//**********UPDATE BUCKET FOR PROJECT */
       destination: thumbFilePath
     });

    return 'success';
  } catch (error) {
    return error;
  }


});
