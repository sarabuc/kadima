// Use python shell
//import * as PythonShell from 'python-shell';
import * as functions from 'firebase-functions';
//import { PythonShell } from 'python-shell';

export const MLFunction = functions.https.onRequest((req, response) => {
  const admin = require('firebase-admin');

  const serviceAccount = require("./your-firestore-key.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  //const dumped = {};

  const schema = {
    users: {
      friends: {
        messages: {},
      },
      groups: {
        messages: {},
      },
    },
    groups: {},
  };

  const db = admin.firestore();
  const dump = (dbRef, aux2, curr) => {
    return Promise.all(Object.keys(aux2).map((collection) => {
      return dbRef.collection(collection).get()
        .then((data) => {
          const promises = [];
          data.forEach((doc) => {
            const data2 = doc.data();
            if (!curr[collection]) {
              curr[collection] = {
                data: {},
                type: 'collection',
              };
              curr[collection].data[doc.id] = {
                data2,
                type: 'document',
              }
            } else {
              curr[collection].data[doc.id] = data2;
            }
            promises.push(dump(dbRef.collection(collection).doc(doc.id), aux[collection], curr[collection].data[doc.id]));
          })
          return Promise.all(promises);
        });
    })).then(() => {
      return curr;
    })
  };
  const aux = { ...schema };
  const answer = {};
  dump(db, aux, answer).then((answer2) => {
    console.log(JSON.stringify(answer2, null, 4));
  });
});

//   PythonShell.run('script.py', null, function (err) {
//     //if (err) throw err;
//     console.log('finished');
//   });
// // const myPythonScriptPath = 'try.py';
// // const pyshell: any = new PythonShell(myPythonScriptPath);

// // pyshell.on('message', message => {
// //     // received a message sent from the Python script (a simple "print" statement)
// //     console.log(message);

// // });

// // // end the input stream and allow the process to exit
// // pyshell.end(err => {
// //     // if (err){
// //     //     throw err;
// //     // };

// //     console.log('finished');
//   response.send('hello from MMMMMMMMLLLLLLLLLLLLL');
// //  });
// });
