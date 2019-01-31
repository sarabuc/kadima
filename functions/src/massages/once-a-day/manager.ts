
const ejs = require('ejs');
import * as sendMail from '../../sendMailAndNoti';
import * as admin from 'firebase-admin';
import * as template from './template';


const db = admin.firestore();

export const managersmail = async function sendManagersMail() {
  try {
    let comment = '';
    const today = new Date()
    today.setHours(23, 59, 59)
    const yesterday = today
    yesterday.setDate(today.getDate() + 1)
    const mails = await db.collection('setting/admin/massages').where('time', '<=', today).get();
    console.log(mails);

    const newMails = mails.docs.map(M => M.data()).filter(M => M.time.getTime() >= yesterday.getTime());
    console.log(newMails);

    const oldMails = mails.docs.map(M => M.data()).filter(M => M.time.getTime() < yesterday.getTime());
    console.log(oldMails);

    const mapedNew = reduceArrByProp(newMails, 'status');
    console.log(mapedNew)

    const mapedOld = reduceArrByProp(oldMails, 'status');
    console.log(mapedOld)







    const Msetting = await db.collection('setting').doc('admin').get();
    const mailTo = Msetting.data().mail;
    comment = 'דוח זה נשלח למנהל משום שלא הוגדרה כתובת מייל למטפל \n';




    let html;
    if (newMails.length > 0) {
        console.log('new');
        html = template.htmlWithNew;
    } else {
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
  } catch (error) {
      console.error(error)
  }
    
}






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