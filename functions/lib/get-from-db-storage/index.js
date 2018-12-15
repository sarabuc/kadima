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
const mipuyForMainArea = require("./getMipuyForMainAreas");
const patsByCondition = require("./getPatientsByConditions");
const mipuyBySecond = require("./getMipuyForSecondAreas");
// import { checkServerIdentity } from 'tls';
exports.getPatientListByDiffiInLastMipuy = patsByCondition.getPatientListByDiffiInLastMipuy;
exports.getOneMipuyByDateAndId = mipuyBySecond.getOneMipuysForPatient;
exports.getMipuysForPatient = mipuyForMainArea.getMipuysForPatient;
exports.getMipuysForPatientBySecond = mipuyBySecond.getMipuysForPatient;
exports.getSecondCategories = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    const secondList = yield admin.firestore().collection('difficults').where('allFahers', '==', 'second').get();
    return secondList.docs;
}));
//# sourceMappingURL=index.js.map