import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as RegisterUser from './register-user';
import * as newUser from './on-new-user';

admin.initializeApp(functions.config().firebase);

export const registerUser = RegisterUser.listener;
export const onNewUser = newUser.onNewUser;