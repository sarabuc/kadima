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
const fs = require("fs");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const path = require("path");
const os = require("os");
const writeJsonFile = require("write-json-file");
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
exports.getAllPatientsDataInCSV = functions.https.onCall((data1, context) => __awaiter(this, void 0, void 0, function* () {
    try {
        const file = 'patientData.json';
        const results = yield db.collection(collectionName).get();
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
        storage.bucket('kadima1-fa119.appspot.com').upload(tempFilePath, {
            destination: thumbFilePath
        });
        return 'success';
    }
    catch (error) {
        return error;
    }
}));
//# sourceMappingURL=index.js.map