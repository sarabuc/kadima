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
//'use strict';
const functions = require("firebase-functions");
//import * as  nodemailer from 'nodemailer';
const nodemailer = require("nodemailer");
const ejs = require('ejs');
const template = require("./template");
exports.sendMail = function send_mail(mailOptions) {
    const gmailEmail = functions.config().gmail.email;
    console.log(gmailEmail);
    const gmailPassword = functions.config().gmail.password;
    console.log(gmailPassword);
    const mailTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword,
        },
    });
    mailTransport.sendMail(mailOptions).then((result) => {
        return 'success';
    }).catch((err) => {
        console.error(err);
        return 'error';
    });
    return true;
};
exports.sendWelcomeEmailFunc2 = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    const pats = [{ name: 'jhh',
            grade: 'hh',
            area: 'hgv',
            testGrade: 'jjjj' },
        { name: 'jhh',
            grade: 'hh',
            area: 'hgv',
            testGrade: 'jjjj' }];
    const data = {
        name: 'sara',
        pats: pats,
        area: 'njhjh',
        grade: 'bjb',
        groupName: 'hjghhv'
    };
    const renderedHtml = ejs.render(template.html, data);
    console.log(renderedHtml);
    const gmailEmail = functions.config().gmail.email;
    console.log(gmailEmail);
    const gmailPassword = functions.config().gmail.password;
    console.log(gmailPassword);
    const mailTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword,
        },
    });
    const APP_NAME = 'קדימה לקידם תלמידים';
    const email = '5324270@gmail.com'; // The email of the user.
    console.log('mail: ' + gmailEmail + 'password ' + gmailPassword + 'user: ' + email);
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
        subject: 'שלום לך',
        html: renderedHtml
    };
    mailTransport.sendMail(mailOptions).then((result) => {
        console.log('New welcome email sent to:', email + result);
        res.send(renderedHtml);
    }).catch((err) => {
        console.error(err);
        res.send(err);
    });
}));
//# sourceMappingURL=index.js.map