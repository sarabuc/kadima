import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import { checkServerIdentity } from 'tls';
const db = admin.firestore();

export const getMipuysForPatient = functions.https.onCall(async (data, context) => {
    try {

        const Pid = data.text;
        const mipuys = await db.collection('mipuy').where('Pid', '==', Pid).get();
        console.log('mipuys:' + mipuys.docs.length);
        if (mipuys.docs.length <= 0) {
            return 'no-mipuy';
        }
        const allDiffi = await db.collection('difficults').get();
        const allMipuysForPatient = [];
        for (const doc of mipuys.docs) { // run on all mipuys for patient
            const mipuyD = doc.data().mipuyDate;
            console.log('mipuy date' + mipuyD);
            const mipuyDetails: { [k: string]: any } = {};
            //let mipuyDiffis = [];
            mipuyDetails['mipuyDate'] = mipuyD;
            const diffiForPatient = await db.collection('patientDifficults').where('Pid', '==', Pid).where('mipuyDate', '==', mipuyD).where('status', '==', 'yes').get();
           // mipuyDetails['dif'] = diffiForPatient.docs;
            const diffDetailsForPat = await allDiffi.docs.filter(D => diffiForPatient.docs.findIndex(D_P => D_P.data().Dcode === D.data().code) > -1);
           // mipuyDetails['details'] = diffDetailsForPat;
            //sort array by all fathers - longest to short
            // filter array if any code are contains in array of fathers
            //const second = await diffDetailsForPat.filter(D => D.data().allFathers === 'second');
            //diffDetailsForPat = await diffDetailsForPat.filter(D => D.data().Dfather !== 'null' && D.data().allFathers !== 'second');
            // await diffDetailsForPat.sort((a, b) => ('' + a.data().allFathers).localeCompare('' + b.data().allFathers));
            // diffDetailsForPat.reverse()
            // const fathersWasEntered = [];
            // mipuyDetails['sort'] = diffDetailsForPat;
           
            const filterdArray = await diffDetailsForPat.filter(diff => diffDetailsForPat.findIndex(D => D.data().Dfather === diff.data().code) < 0);
          //  mipuyDetails['filtered'] = filterdArray;
            for (const diff of filterdArray) {
                console.log(diff.data());
                if(diff.data().allFathers === 'second' || diff.data().Dfather ==='null') {
                    console.log('second or first');
                    if (!mipuyDetails[diff.data().code]) {
                        mipuyDetails[diff.data().code] = [];
                    }
                    mipuyDetails[diff.data().code].push(diff.data().code);

                } else {
                    console.log('not second');
                    const fathers = diff.data().allFathers.split('*');
                    if (!fathers[1]) {
                        console.log('error father');
                        continue;
                    }
                    if (!mipuyDetails[fathers[1]]) {
                        mipuyDetails[fathers[1]] = [];
                    }
                    mipuyDetails[fathers[1]].push(diff.data().code);

                }
             }
            allMipuysForPatient.push(mipuyDetails);

        }
        return allMipuysForPatient;
    } catch (err) {
        return err;
    }
    return 'no';
});



export const getOneMipuysForPatient = functions.https.onCall(async (data, context) => {
    try {

        const Pid = data.text;
        const mipuyD = data.date;
        
        const allDiffi = await db.collection('difficults').get();
            console.log('mipuy date' + mipuyD);
            const mipuyDetails: { [k: string]: any } = {};
            mipuyDetails['mipuyDate'] = mipuyD;

        const diffiForPatient = await db.collection('patientDifficults').where('Pid', '==', Pid).where('mipuyDate', '==', mipuyD).where('status', '==', 'yes').get();
        const diffDetailsForPat = await allDiffi.docs.filter(D => diffiForPatient.docs.findIndex(D_P => D_P.data().Dcode === D.data().code) > -1);
        const filterdArray = await diffDetailsForPat.filter(diff => diffDetailsForPat.findIndex(D => D.data().Dfather === diff.data().code) < 0);
        for (const diff of filterdArray) {
            if (diff.data().allFathers === 'second' || diff.data().Dfather ==='null') {
                if (!mipuyDetails[diff.data().code]) {
                    mipuyDetails[diff.data().code] = [];
                }
                mipuyDetails[diff.data().code].push(diff.data().code);

            } else {
                const fathers = diff.data().allFathers.split('*');
                if (!fathers[1]) {
                    console.log('error father');
                    continue;
                }
                if (!mipuyDetails[fathers[1]]) {
                    mipuyDetails[fathers[1]] = [];
                }
                mipuyDetails[fathers[1]].push(diff.data().code);

            }
        }
        
        return mipuyDetails;
    } catch (err) {
        return err;
    }
    return 'no';
});

// export const getMipuysForPatient3 = functions.https.onCall(async (data, context) => {
//     try {
        
//         const Pid = data.text;
//         const mipuys = await db.collection('mipuy').where('Pid', '==', Pid).get();
//         console.log('mipuys:' + mipuys.docs.length);
//         if (mipuys.docs.length <= 0) {
//             return 'no-mipuy';
//         }
//         const secDiffi = await db.collection('difficults').where('allFathers', '==', 'second').get();
//         const allMipuysForPatient = [];
//         for (const doc of mipuys.docs) { // run on all mipuys for patient
//             const mipuyD = doc.data().mipuyDate;
//             console.log('mipuy date' + mipuyD);
//             const mipuyDetails: { [k: string]: any } = {};
//             let mipuyDiffis = [];
//             mipuyDetails['mipuyDate'] = mipuyD;
//             const diffiForPatient = await db.collection('patientDifficults').where('Pid', '==', Pid).where('mipuyDate', '==', mipuyD).where('status', '==', 'yes').get();
//             //mipuyDetails['dif'] = diffiForPatient.docs;
//             const secondForPat = await secDiffi.docs.filter(D => diffiForPatient.docs.findIndex(D_P => D_P.data().Dcode === D.data().code)> -1);
//             //mipuyDetails['seco'] = secondForPat;
//             //mipuyDetails['seco3'] = secDiffi.docs;

//             for (const second of secondForPat) {
              
//                    mipuyDetails[second.data().code] = [];
//                    mipuyDetails[second.data().code].push(second.data().code)
//                 await rucorsesiveCheck(second.data().code, mipuyDetails[second.data().code], diffiForPatient);
//                    //mipuyDetails[second.data().code] = childDiff;
                
//             }


//             allMipuysForPatient.push(mipuyDetails);
//             console.log('all mipuy');
//             console.log(allMipuysForPatient);

//         }
//         return allMipuysForPatient;
//     } catch(err) {
// return err;
//     }
//     return 'no';
// });

// async function rucorsesiveCheck(code, secondArr: any[], diffiForPatient) {
// // check if diff have children - if yes - concat them to secondArr - after splice their father if not return secondArr
//     const childDiff = await db.collection('difficults').where('Dfather', '==', code).get();
//     if (childDiff.docs.length < 1) {
//         // diff is leave
//         return;
//     }
//     const childForPat = await childDiff.docs.filter(D => diffiForPatient.docs.findIndex(D_P => D_P.data().Dcode === D.data().code) > -1);
//     if (childForPat.length < 1) {
//         // diff are not match for pat
//         return;
//     }
//     // else have remove father and concat chilren and send for every child in recorsive
//     secondArr.splice(secondArr.findIndex(D => D === code));
//     for (const child of childForPat) {
//         secondArr.push(child.data().code);
//        await rucorsesiveCheck(child.data().code, secondArr, diffiForPatient);
//     }
// }
/*
export const getMipuysForPatient2 = functions.https.onCall(async (data, context) => {
    try {
        const Pid = data.text;
        const mipuys = await db.collection('mipuy').where('Pid', '==', Pid).get();
        console.log('mipuys:' + mipuys.docs.length);
        if (mipuys.docs.length <= 0) {
            return 'no-mipuy';
        }
        const allDiffi = await db.collection('difficults').get();
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
                        continue;
                    } else if (findD.data().Dfather === 'null') {
                        console.log('mainDiff');
                            // main dif
                            continue;
                    } else if (findD.data().allFathers === 'second') {
                        console.log('fatherisnull' + diffi.data().Dcode);
                        mipuyDetails[diffi.data().Dcode] = [];
                        mipuyDetails[diffi.data().Dcode].push(diffi.data().Dcode);
                        continue;
                    } 
                    console.log('findD ' + findD);
                    console.log('findD all fathers' + findD.data().allFathers);
                    const fathers = ('' + findD.data().allFathers).trim().split('*');
                    console.log(fathers);
                    const mainFather = fathers[0];
                    const secondFather = fathers[1];
                    
                    console.log('findD main father ' + secondFather);
                    if (!mipuyDetails[secondFather] && findD.data().Dfather !== 'null') {
                        //if it is already underfind - didnt enter any diffrents in this area
                        console.log('new area ' + diffi.data().Dcode);
                        console.log('new area - main father ' + secondFather);
                        mipuyDetails[secondFather] = [];
                        mipuyDetails[secondFather].push(diffi.data().Dcode);
                        console.log('len diffs ' + mipuyDiffis.length);
                        mipuyDiffis = mipuyDiffis.concat(fathers);
                        console.log('diffs in array' + mipuyDiffis);
                        console.log('len diffs ' + mipuyDiffis.length);
                        //  var unique = arr.filter(function (elem, index, self) {
                        //    return index === self.indexOf(elem);
                        //  })
                    } else if (mipuyDetails[secondFather].indexOf(diffi.data().Dcode)) {
                        continue;
                    } else {
                        let flag = false;
                        // diff was not entered but maybe his father was entered- have to change him if was - if not have to push to areas array
                        // check if  one of his fathers was entered
                        for (let j = 2; j<fathers.length; j++) {
                            const father = fathers[j];
                            const i = mipuyDetails[secondFather].indexOf(father);
                            if (i > -1) {
                                // have replace
                                console.log('have replace' + mipuyDetails[secondFather][i] + diffi.data().Dcode);
                                mipuyDetails[secondFather][i] = diffi.data().Dcode;
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
            console.log('all mipuy');
            console.log(allMipuysForPatient);

        }
        return allMipuysForPatient;

    } catch (error) {
        return error;
    }

});
*/

