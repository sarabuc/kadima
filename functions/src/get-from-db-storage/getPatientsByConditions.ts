import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const getPatientListByDiffiInLastMipuy = functions.https.onCall(async (data, context) => {
    const db = admin.firestore();
    const diffi = data.text;
    console.log(diffi);
    const patientList = [];
    //const patients = await db.collection('patients').where('haveDifficult', '==', true).get();
    const mipuyForPatient = await db.collection('mipuy').get(); //orderBy('Pid', 'desc').get();
    const chooseddiffiForPatient = await db.collection('patientDifficults').where('Dcode', '==', diffi).get(); //orderBy('Pid', 'desc').get();

    for (const dif of chooseddiffiForPatient.docs) {

        // have to check if it is last mipuy
        const index = mipuyForPatient.docs.findIndex(doc => ('' + doc.data().mipuyDate).split('.').reverse().join().localeCompare(('' + dif.data().mipuyDate).split('.').reverse().join()) > 0);

        if (index === -1) {
            // const find_pat =await patients.docs.find(pat => pat.id ===  dif.data().Pid);
            // console.log(find_pat);
            patientList.push(dif.data().Pid);
        }
        // const index2 = '12.10.2017'.split('.').reverse().join().localeCompare('11.11.2017'.split('.').reverse().join());//returned -1
        // const index3 = '12.11.2017'.split('.').reverse().join().localeCompare('11.10.2018'.split('.').reverse().join());//returned -1
    }
    //return '' + index1 + '' +index2+ '' +index3;
    return patientList;
});
function check(id1, id2) {
    console.log('id' + id1 + id2)
    return id1 === id2;
}