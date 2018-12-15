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
const sendMail = require("../sendMailAndNoti");
const admin = require("firebase-admin");
const template = require("./template");
const ejs = require('ejs');
const db = admin.firestore();
exports.do_once_a_day = functions.https.onRequest((req, res) => {
    res.send(200);
});
// only for limudy area
exports.do_once_a_week = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    const Msetting = yield db.collection('manager').doc('setting').get();
    //get all groups
    // have get all grades entered last week
    //have get for any group all grades  of this pats in spesific area
    // for every group have send a mail to therapist
    //get all groups
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 7);
    console.log(firstDate);
    const limudyArea = yield db.collection('difficults').where('Dfather', '==', 'לימודי').get();
    const groups = yield db.collection('groups').get(); // where('isActive', '==', true).get();
    const lastGrades = yield db.collection('gradeMassageForTherapists').where('insertTime', '>=', firstDate).get();
    console.log('last grades  ' + lastGrades.docs.length);
    console.log(lastGrades.docs);
    for (const group of groups.docs) {
        const area = group.data().area;
        if (limudyArea.docs.findIndex(A => A.data().code === area) < 0) {
            continue;
        }
        let comment = '';
        const code = group.data().groupCode;
        const therapist = yield db.collection('therapist').doc('' + group.data().Tid).get();
        const patsInGroup = yield db.collection('patientInGroup').where('groupCode', '==', code).get();
        let mailTo;
        if (therapist.data().mail) {
            // have a mail
            mailTo = therapist.data().mail;
        }
        else {
            mailTo = Msetting.data().mail;
            comment = comment + 'דוח זה נשלח למנהל משום שלא הוגדרה כתובת מייל למטפל \n';
        }
        console.log(mailTo);
        const pats = lastGrades.docs.filter(grade => grade.data().area === group.data().area &&
            patsInGroup.docs.findIndex(pat => pat.data().Pid === grade.data().Pid) > -1);
        console.log('pats len' + pats.length);
        const email = mailTo;
        let html;
        if (pats.length > 0) {
            console.log('pats');
            console.log(pats);
            html = template.html;
        }
        else {
            html = template.html2;
        }
        const data = {
            name: therapist.data().firstName + ' ' + therapist.data().lastName,
            pats: pats,
            area: area,
            grade: ('' + group.data().grade1).split('-')[0],
            groupName: group.data().groupName,
            comment: comment,
            newDate: new Date()
        };
        const renderedHtml = ejs.render(html, data);
        const mailOptions = {
            from: 'קדימה - ניהול מערכת לקידום תלמידים',
            to: email,
            subject: '- ציונים שבועיים לקבוצת ' + '"' + group.data().groupName + '"',
            html: renderedHtml
        };
        sendMail.sendMail(mailOptions);
    }
    res.send(200);
}));
//# sourceMappingURL=index.js.map