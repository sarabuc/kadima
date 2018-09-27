// const admin = require("firebase-admin");
import * as fs from 'fs-extra';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as path from 'path';
import * as os from 'os';
//const gcs = require('@google-cloud/storage')();
const spawn = require('child-process-promise').spawn;

//const bucketPath = 'MYPROJECTNAME.appspot.com'
//const serviceAccount = require("./serviceAccountKey.json");
const collectionName = 'patient'; //process.argv[2];
const subCollection = process.argv[3];
const db = admin.firestore();
const storage = admin.storage();
db.settings({ timestampsInSnapshots: true });

const data = {};
data[collectionName] = {};

export const getAllPatientsDataInCSV = functions.https.onCall(async(data1, context) => {
  try {

    const file = 'patientData.json';

    const results = await db.collection(collectionName).get();

    for (const doc of results.docs) {
      data[collectionName][doc.id] = doc.data();
    }
    // return data;
    //const fileBucket = object.bucket;
    const tempFilePath = path.join(os.tmpdir(), file);
    //const bucket = gcs.bucket(tempFilePath);

    fs.writeJson(tempFilePath, JSON.stringify(data)).then(() => {

    spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath]);
  }).then(() => {
    console.log('Thumbnail created at', tempFilePath);
    // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
    const thumbFileName = `thumb_${file}`;
    const thumbFilePath = path.join(path.dirname(file), thumbFileName);
    storage.bucket().upload(tempFilePath, {
       destination: thumbFilePath
     });
    // Uploading the thumbnail.
    // return bucket.upload(tempFilePath, {
    //   destination: thumbFilePath
    // });
    // Once the thumbnail has been uploaded delete the local file to free up disk space.
  }).then(() => fs.unlinkSync(tempFilePath));
    return 'sucess';
  } catch (error) {
    return error;
  }


});
