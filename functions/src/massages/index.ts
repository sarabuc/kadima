
import * as onceAWeek from './once-a-week';
import * as onceADay from './once-a-day';


export const do_once_a_day = onceADay.do_once_a_day;
export const do_once_a_week = onceAWeek.do_once_a_week;









//functions.https.onRequest(async (req, res) => {
    // const Msetting = await db.collection('manager').doc('setting').get();
    // //get all groups
    // // have get all grades entered last week
    // //have get for any group all grades  of this pats in spesific area
    // // for every group have send a mail to therapist

    // //get all groups
    // const firstDate = new Date();
    // firstDate.setDate(firstDate.getDate() - 7);
    // console.log(firstDate);
    // const limudyArea = await db.collection('difficults').where('Dfather', '==', 'לימודי').get();
    // const groups = await db.collection('groups').get();// where('isActive', '==', true).get();
    // const lastGrades = await db.collection('gradeMassageForTherapists').where('insertTime', '>=', firstDate).get();
    // console.log('last grades  ' + lastGrades.docs.length);
    // console.log(lastGrades.docs);
    // for (const group of groups.docs) {
    //     const area = group.data().area;
    //     if (limudyArea.docs.findIndex(A => A.data().code === area) < 0) {
    //         continue;
    //     }
    //     let comment = '';
    //     const code = group.data().groupCode;
    //     const therapist = await db.collection('therapist').doc('' + group.data().Tid).get();
    //     const patsInGroup = await db.collection('patientInGroup').where('groupCode', '==', code).get();

    //     let mailTo;
    //     if (therapist.data().mail) {
    //         // have a mail
    //         mailTo = therapist.data().mail;
    //     } else {
    //         mailTo = Msetting.data().mail;
    //         comment = comment + 'דוח זה נשלח למנהל משום שלא הוגדרה כתובת מייל למטפל \n';
    //     }
    //     console.log(mailTo);
    //     const pats = lastGrades.docs.filter(grade => grade.data().area === group.data().area &&
    //         patsInGroup.docs.findIndex(pat => pat.data().Pid === grade.data().Pid) > -1);
    //     console.log('pats len' + pats.length);
    //     const email = mailTo;
    //     let html;
    //     if (pats.length > 0) {
    //         console.log('pats');
    //         console.log(pats);
    //         html = template.html;
    //     } else {
    //         html = template.html2;
    //     }
    //     const data = {
    //         name: therapist.data().firstName + ' ' + therapist.data().lastName,
    //         pats: pats,
    //         area: area,
    //         grade: ('' + group.data().grade1).split('-')[0],
    //         groupName: group.data().groupName,
    //         comment: comment,
    //         newDate: new Date()
    //     };
    //     const renderedHtml = ejs.render(html, data);

    //     const mailOptions = {
    //         from: 'קדימה - ניהול מערכת לקידום תלמידים',
    //         to: email,
    //         subject: '- ציונים שבועיים לקבוצת ' + '"' + group.data().groupName + '"',
    //         html: renderedHtml
    //     };
    //     sendMail.sendMail(mailOptions);
    // }


    // res.send(200);
//});