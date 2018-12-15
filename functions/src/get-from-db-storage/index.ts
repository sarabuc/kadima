import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as mipuyForMainArea from './getMipuyForMainAreas';
import * as patsByCondition from './getPatientsByConditions';
import * as mipuyBySecond from './getMipuyForSecondAreas';
// import { checkServerIdentity } from 'tls';

export const getPatientListByDiffiInLastMipuy = patsByCondition.getPatientListByDiffiInLastMipuy;

export const getOneMipuyByDateAndId = mipuyBySecond.getOneMipuysForPatient;

export const getMipuysForPatient = mipuyForMainArea.getMipuysForPatient;
export const getMipuysForPatientBySecond = mipuyBySecond.getMipuysForPatient;

export const getSecondCategories = functions.https.onCall(async (data, context) => {
  const secondList = await admin.firestore().collection('difficults').where('allFahers', '==', 'second').get();
  return secondList.docs;

});
