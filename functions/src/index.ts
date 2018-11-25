//import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
import * as getFromFirebase from './get-from-db-storage';
import * as sendMail_Noti from './sendMailAndNoti';
import * as ML from './ML';
//import {find} from 'p-iteration';
import * as import_export from './exports_imports_data';
import * as once_a_day from './once-a-day';
import * as auth from './auth';
// admin.initializeApp(functions.config().firebase);

//export const im_ex = import_export.getAllPatientsDataInCSV;
export const getMipuysForPatient = getFromFirebase.getMipuysForPatient;
export const getOneMipuyByDateAndId = getFromFirebase.getOneMipuyByDateAndId;
export const getPatByDiffi = getFromFirebase.getPatientListByDiffiInLastMipuy;
//export const getMainDiffiAreas = getFromFirebase.getMainDiffiAreas;
export const sendMail3 = sendMail_Noti.sendWelcomeEmailFunc2;
export const onceADay = once_a_day.do_once_a_day;
export const onceAWeek = once_a_day.do_once_a_week;
//export const MLFunc = ML.MLFunction;
export const login = auth.login;
        