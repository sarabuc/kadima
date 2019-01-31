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
const ejs = require('ejs');
const sendMail = require("../../sendMailAndNoti");
const admin = require("firebase-admin");
const template = require("./template");
const db = admin.firestore();
exports.managersmail = function sendManagersMail() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let comment = '';
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
            const mapedNew = reduceArrByProp(newMails, 'status');
            console.log(mapedNew);
            const mapedOld = reduceArrByProp(oldMails, 'status');
            console.log(mapedOld);
            const Msetting = yield db.collection('setting').doc('admin').get();
            const mailTo = Msetting.data().mail;
            comment = 'דוח זה נשלח למנהל משום שלא הוגדרה כתובת מייל למטפל \n';
            let html;
            if (newMails.length > 0) {
                console.log('new');
                html = template.htmlWithNew;
            }
            else {
                html = template.htmlWithNew;
                console.log(html);
            }
            const data = {
                new: mapedNew,
                newMails: oldMails,
                tytle: 'הודעות מנהל הקימות במערכת',
                comment: comment,
                newDate: new Date()
            };
            const renderedHtml = ejs.render(html, data);
            console.log(renderedHtml);
            const mailOptions = {
                from: 'קדימה - ניהול מערכת לקידום תלמידים',
                to: mailTo,
                subject: 'הודעות ותזכורות למנהל',
                html: renderedHtml
            };
            sendMail.sendMail(mailOptions);
            console.log('after mail');
        }
        catch (error) {
            console.error(error);
        }
    });
};
function reduceArrByProp(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc; // .map(G => ({area: G.Dcode, grade: G.grade, date: G.testDate, comment: G.comment}));
    }, {});
}
//# sourceMappingURL=manager.js.map