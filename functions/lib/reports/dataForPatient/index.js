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
const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.dataForPatient_report = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    const Pid = data.Pid;
    const db = admin.firestore();
    const pat = yield db.collection('patients').doc('' + Pid).get(); // patient private data
    const mipuyforPat = yield db.collection('mipuy').where('Pid', '==', Pid).get();
    const diffForPat = yield db.collection('patientDifficults').where('Pid', '==', Pid).get();
    const planForPat = yield db.collection('plan').where('Pid', '==', Pid).get();
    const gradesForPat = yield db.collection('grades').where('Pid', '==', Pid).get();
    const groupForPat = yield db.collection('patientInGroup').where('Pid', '==', Pid).get();
    const treatForPat = yield db.collection('treatmentInfo').where('Pid', '==', Pid).get();
    const patientData = yield db.collection('patientData').where('Pid', '==', Pid).get();
    const patientComments = yield db.collection('patientsComments').where('Pid', '==', Pid).get();
}));
//# sourceMappingURL=index.js.map