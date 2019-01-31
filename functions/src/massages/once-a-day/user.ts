import * as  functions from 'firebase-functions';
const nodemailer = require("nodemailer");
const ejs = require('ejs');
import * as sendMail from '../../sendMailAndNoti';
import * as admin from 'firebase-admin';

const db = admin.firestore();

export const usersmail = async function sendUsersMail(){
const today  = new Date()
today.setHours(23, 59, 59)
const yesterday = today
yesterday.setDate(today.getDate() + 1)
const mails = await db.collection('setting/admin/massages').where('time', '<=', today).get();
console.log(mails);

const newMails = mails.docs.map(M => M.data()).filter(M => M.time.getTime() >= yesterday.getTime());
console.log(newMails);

const oldMails = mails.docs.map(M => M.data()).filter(M => M.time.getTime() < yesterday.getTime());
console.log(oldMails);

}