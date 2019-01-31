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
const mailToThera = require("./groupGradesFotTherapist");
exports.sendMailToTherapistAboutGrades = mailToThera.sendMailToTherapistAboutGrades;
// only for limudy area
exports.do_once_a_week = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    mailToThera.sendMailToTherapistAboutGrades().then(ans => {
        res.send(200);
    }).catch(err => {
        res.send(400);
    });
}));
//# sourceMappingURL=index.js.map