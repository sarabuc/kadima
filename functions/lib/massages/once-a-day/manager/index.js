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
const nodemailer = require("nodemailer");
const ejs = require('ejs');
const admin = require("firebase-admin");
const db = admin.firestore();
exports.managersmail = function sendManagersMail() {
    return __awaiter(this, void 0, void 0, function* () {
        const today = new Date();
        today.setHours(23, 59, 59);
        const yesterday = today;
        yesterday.setDate(today.getDate() + 1);
        const mails = yield db.collection('setting/admin/massages').where('time', '<=', today).get();
        console.log(mails);
        const newMails = mails.docs.map(M => M.data()).filter(M => M.time.getTime() >= yesterday.getTime());
        console.log(newMails);
        const oldMails = mails.docs.map(M => M.data()).filter(M => M.time.getTime() < yesterday.getTime());
        console.log(oldMails);
    });
};
//# sourceMappingURL=index.js.map