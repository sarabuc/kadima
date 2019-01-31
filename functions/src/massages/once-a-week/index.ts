import * as functions from 'firebase-functions';
import * as mailToThera from './groupGradesFotTherapist';
export const sendMailToTherapistAboutGrades = mailToThera.sendMailToTherapistAboutGrades;

// only for limudy area
export const do_once_a_week = functions.https.onRequest(async (req, res) => {
    mailToThera.sendMailToTherapistAboutGrades().then(ans => {
        res.send(200);

    }).catch(err => {
        res.send(400);

    });
});