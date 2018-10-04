// const admin = require("firebase-admin");
import * as fs from 'fs';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as path from 'path';
import * as os from 'os';
import * as writeJsonFile from 'write-json-file';
import * as json2csv from 'json2csv';
//const gcs = require('@google-cloud/storage')();


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
    if(false) {
      writeJsonFile.sync(tempFilePath, data);
    const read = fs.readFileSync(tempFilePath);
    console.log(read);

    }
    if (true) {
      const Json2csvParser = json2csv.Parser;
        const fields = ["field", "header"];
        const opts = { fields };

        try {
          const parser = new Json2csvParser(opts);
          const csv = parser.parse(data);
          console.log(csv);
        }catch(err) {
          console.error(err);

        }
    }

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
