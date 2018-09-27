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
// const admin = require("firebase-admin");
const fs = require("fs-extra");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const path = require("path");
const os = require("os");
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
exports.getAllPatientsDataInCSV = functions.https.onCall((data1, context) => __awaiter(this, void 0, void 0, function* () {
    try {
        const file = 'patientData.json';
        const results = yield db.collection(collectionName).get();
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
    }
    catch (error) {
        return error;
    }
}));
//# sourceMappingURL=index.js.map