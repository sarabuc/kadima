import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { checkServerIdentity } from 'tls';

export const getPatientListByDiffiInLastMipuy = functions.https.onCall(async (data, context) => {
  const db = admin.firestore();
  const diffi = data.text;
  let patientList = [];
  const patients = await db.collection('patients').where('haveDifficult', '==', true).get();
  const mipuyForPatient = await db.collection('mipuy').get(); //orderBy('Pid', 'desc').get();
  const chooseddiffiForPatient = await db.collection('patientDifficults').where('Dcode', '==', diffi).get(); //orderBy('Pid', 'desc').get();

  for (const dif of chooseddiffiForPatient.docs) {

    // have to check if it is last mipuy
    const index = mipuyForPatient.docs.findIndex(doc => doc.data().mipuyDate.split('.').reverse().join().localeCompare(dif.data().mipuyDate.split('.').reverse().join()) > 0);
    
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

export const getOneMipuyByDateAndId = functions.https.onCall(async (data, context) => {
  try {
    const db = admin.firestore();
    const Pid_date = data.text;

    const mipuy = await db.collection('mipuy').doc(Pid_date).get();
    if (!mipuy.exists) {
      return 'no-mipuy';
    }
    const allDiffi = await db.collection('difficults').get();
    const mipuyD = mipuy.data().mipuyDate;
    const Pid = mipuy.data().Pid;
    const mipuyDetails: { [k: string]: any } = {};
    let mipuyDiffis = [];

    mipuyDetails['mipuyDate'] = '' + mipuyD;


    const diffiForPatient = await db.collection('patientDifficults').where('Pid', '==', Pid).where('mipuyDate', '==', mipuyD).where('status', '==', 'yes').get();
    console.log('all diffi for patient' + diffiForPatient.docs.length);

    for (const diffi of diffiForPatient.docs) {
      console.log('diffi is' + diffi.data().Dcode);
      console.log('index is ' + mipuyDiffis.indexOf(diffi.data().Dcode));
      if (mipuyDiffis.indexOf(diffi.data().Dcode) > -1) {
        console.log('child was entered ' + diffi.data().Dcode);
        // this difficult was enterd (his child)- have to do nothing
        continue;
      } else {
        const findD = await allDiffi.docs.find(D => D.data().code === diffi.data().Dcode);
        //  for (const D of allDiffi.docs) {
        //    if (D.data().code === diffi.data().Dcode){
        //      allMipuysForPatient.push(D.data().code)
        //      findD = D;
        //      break;
        //    }
        //  }
        if (!findD) {
          console.error('did not find diffi with name ' + diffi.data().Dcode);// dont remove
          break;
        }
        console.log('findD ' + findD);
        console.log('findD all fathers' + findD.data().allFathers);
        const fathers = ('' + findD.data().allFathers).trim().split('*');
        const mainFather = fathers[0];
        console.log('findD main father ' + mainFather);
        if (findD.data().Dfather === 'null') {
          console.log('fatherisnull' + diffi.data().Dcode);
          mipuyDetails[diffi.data().Dcode] = [];
          mipuyDetails[diffi.data().Dcode].push(diffi.data().Dcode);
        } else if (!mipuyDetails[mainFather] && findD.data().Dfather !== 'null') {
          //if it is already underfind - didnt enter any diffrents in this area
          console.log('new area ' + diffi.data().Dcode);
          console.log('new area - main father ' + mainFather);
          mipuyDetails[mainFather] = [];
          mipuyDetails[mainFather].push(diffi.data().Dcode);
          console.log('len diffs ' + mipuyDiffis.length);
          mipuyDiffis = mipuyDiffis.concat(fathers);
          console.log('diffs in array' + mipuyDiffis);
          console.log('len diffs ' + mipuyDiffis.length);
          //  var unique = arr.filter(function (elem, index, self) {
          //    return index === self.indexOf(elem);
          //  })
        } else if (mipuyDetails[mainFather].indexOf(diffi.data().Dcode)) {
          continue;
        } else {
          let flag = false;
          // diff was not entered but maybe his father was entered- have to change him if was - if not have to push to areas array
          // check if  one of his fathers was entered
          for (const father of fathers) {
            const i = mipuyDetails[mainFather].indexOf(father);
            if (i > -1) {
              // have replace
              console.log('have replace' + mipuyDetails[mainFather][i] + diffi.data().Dcode);
              mipuyDetails[mainFather][i] = diffi.data().Dcode;
              flag = true;
              break;
            }
          } // end of for- there was not any father
          if (!flag) {
            // have to push to areas array
            console.log('new leave in area' + diffi.data().Dcode);
            mipuyDetails[mainFather].push(diffi.data().Dcode);

          }
          mipuyDiffis = mipuyDiffis.concat(fathers);
          console.log('diffs in array' + mipuyDiffis);

        }
      }
    }

    return mipuyDetails;

  } catch (error) {
    return 'error!';
  }

});

export const getMipuysForPatient = functions.https.onCall(async (data, context) => {
  try {
    const db = admin.firestore();
    const Pid = data.text;
    // const db = admin.firestore();

    const mipuys = await db.collection('mipuy').where('Pid', '==', Pid).get();
    console.log('mipuys:' + mipuys.docs.length);
    if (mipuys.docs.length <= 0) {
      return 'no-mipuy';
    }
    // const mipuys = mipuysT.docs.filter((item, pos) =>{
    //   return mipuysT.docs.indexOf(item) === pos;
    // });
    const allDiffi = await db.collection('difficults').get();
    //const mainAreas = await db.collection('difficults').where('Dfather', '==', 'null').get();
    const allMipuysForPatient = [];


    for (const doc of mipuys.docs) { // run on all mipuys for patient
      const mipuyD = doc.data().mipuyDate;
      console.log('mipuy date' + mipuyD);
      const mipuyDetails: { [k: string]: any } = {};
      let mipuyDiffis = [];

      mipuyDetails['mipuyDate'] = mipuyD;


      const diffiForPatient = await db.collection('patientDifficults').where('Pid', '==', Pid).where('mipuyDate', '==', mipuyD).where('status', '==', 'yes').get();
      console.log('all diffi for patient' + diffiForPatient.docs.length);

      for (const diffi of diffiForPatient.docs) {
        console.log('diffi is' + diffi.data().Dcode);
        console.log('index is ' + mipuyDiffis.indexOf(diffi.data().Dcode));
        if (mipuyDiffis.indexOf(diffi.data().Dcode) > -1) {
          console.log('child was entered ' + diffi.data().Dcode);
          // this difficult was enterd (his child)- have to do nothing
          continue;
        } else {
          const findD = await allDiffi.docs.find(D => D.data().code === diffi.data().Dcode);
          //  for (const D of allDiffi.docs) {
          //    if (D.data().code === diffi.data().Dcode){
          //      allMipuysForPatient.push(D.data().code)
          //      findD = D;
          //      break;
          //    }
          //  }
          if (!findD) {
            console.error('did not find diffi with name ' + diffi.data().Dcode);// dont remove
            break;
          }
          console.log('findD ' + findD);
          console.log('findD all fathers' + findD.data().allFathers);
          const fathers = ('' + findD.data().allFathers).trim().split('*');
          const mainFather = fathers[0];
          console.log('findD main father ' + mainFather);
          if (findD.data().Dfather === 'null') {
            console.log('fatherisnull' + diffi.data().Dcode);
            mipuyDetails[diffi.data().Dcode] = [];
            mipuyDetails[diffi.data().Dcode].push(diffi.data().Dcode);
          } else if (!mipuyDetails[mainFather] && findD.data().Dfather !== 'null') {
            //if it is already underfind - didnt enter any diffrents in this area
            console.log('new area ' + diffi.data().Dcode);
            console.log('new area - main father ' + mainFather);
            mipuyDetails[mainFather] = [];
            mipuyDetails[mainFather].push(diffi.data().Dcode);
            console.log('len diffs ' + mipuyDiffis.length);
            mipuyDiffis = mipuyDiffis.concat(fathers);
            console.log('diffs in array' + mipuyDiffis);
            console.log('len diffs ' + mipuyDiffis.length);
            //  var unique = arr.filter(function (elem, index, self) {
            //    return index === self.indexOf(elem);
            //  })
          } else if (mipuyDetails[mainFather].indexOf(diffi.data().Dcode)) {
            continue;
          } else {
            let flag = false;
            // diff was not entered but maybe his father was entered- have to change him if was - if not have to push to areas array
            // check if  one of his fathers was entered
            for (const father of fathers) {
              const i = mipuyDetails[mainFather].indexOf(father);
              if (i > -1) {
                // have replace
                console.log('have replace' + mipuyDetails[mainFather][i] + diffi.data().Dcode);
                mipuyDetails[mainFather][i] = diffi.data().Dcode;
                flag = true;
                break;
              }
            } // end of for- there was not any father
            if (!flag) {
              // have to push to areas array
              console.log('new leave in area' + diffi.data().Dcode);
              mipuyDetails[mainFather].push(diffi.data().Dcode);

            }
            mipuyDiffis = mipuyDiffis.concat(fathers);
            console.log('diffs in array' + mipuyDiffis);

          }
        }
      }
      allMipuysForPatient.push(mipuyDetails);

    }
    return allMipuysForPatient;

  } catch (error) {
    return 'error!';
  }

});

export const getMainDiffiAreas = functions.https.onCall(async (data, context) => {
  try {
    const db = admin.firestore();
    const mainAreas = await db.collection('difficults').where('Dfather', '==', 'null').get();
    const areas = [];
    for (const doc of mainAreas.docs) {
      const D = {
        code: doc.data().code,
        index: doc.data().index,
        allFathers: doc.data().allFathers
      };

      areas.push(D);
    }
    return areas;

  } catch (error) {
    return error;
  }

});
