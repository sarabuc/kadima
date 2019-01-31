import * as functions from 'firebase-functions';
import * as user from './user';
import * as manager from './manager';

export const do_once_a_day = functions.https.onRequest(async (req, res) => {
    manager.managersmail().then(ans => {
        res.send(200);

    }).catch(err => {
        res.send(400);

    });
});