import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const dataForPatient_report = functions.https.onCall(async (data, context) => {
    const Pid = data.Pid;
    const db = admin.firestore();
    const pat = await db.collection('patients').doc('' + Pid).get();// patient private data
    const mipuyforPat = await db.collection('mipuy').where('Pid', '==', Pid).get();
    const diffForPat = await db.collection('patientDifficults').where('Pid', '==', Pid).get();
    const planForPat = await db.collection('plan').where('Pid', '==', Pid).get();
    const gradesForPat = await db.collection('grades').where('Pid', '==', Pid).get();
    const groupForPat = await db.collection('patientInGroup').where('Pid', '==', Pid).get();
    const treatForPat = await db.collection('treatmentInfo').where('Pid', '==', Pid).get();
    const patientData = await db.collection('patientData').where('Pid', '==', Pid).get();
    const patientComments = await db.collection('patientsComments').where('Pid', '==', Pid).get();



});