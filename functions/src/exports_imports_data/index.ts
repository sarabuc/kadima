import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as fs from 'fs-extra';
import * as _ from 'lodash';
import * as XLSX from 'xlsx';
import * as shortid from 'shortid';
import * as dot from 'dot-object';
//import { sortByKeysFn, decodeDoc } from '../shared';

const db = admin.firestore();

export const getAllPatientsDataInCSV =  functions.https.onRequest(async (req, response) => {
  const file = 'patientSata.json';
  try {
  //  const json1 = {
  //     one: 1,
  //     two: 2
  //   }
  //  const json = JSON.stringify(json1);
  //   f_s.writeFile('./foo.json', json, (err) => {
  //     if (!err) {
  //       console.log('done');
  //     }
  //   });
    const collection = await db.collection('patient'); //const collectionPaths = await db.getCollections();//.then(colls => colls.map(coll => coll.path));
    // getCollections(collectionPaths)
    //   .then(collections => {
    //     console.log('Writing to CSV:', file);

    // const book = json2book({ "name": "John", "age": 30, "car": null });
    // console.log('book'+ book);
    // bookWriteCSV(book, file);
    //   })
    //   .then(() => {
    //     console.log('Download was a success!');
    //   })
    //   .catch(err => {
    //     console.log('Failure: ', err);
    //   });
    //fs.writeJson(file, JSON.stringify(collection));
    const file1 = 'kadima/my_json_data.json'

    fs.outputJsonSync(file1, { name: 'JP' }, res => {
      console.log(res);
      response.send('51515');
    });

  } catch (error) {
    console.error(error);
    response.send(error);
  }

});


function getCollections(paths): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const collections = {};

    try {
      // A heavily nested sub-collection-tree will cause a parallel promise explosion,
      // so we rather request them sequentially. Might be worth allowing parallel
      // recursion upon user request, for smaller trees and faster execution.
      for (const path of paths) {
        const collection = await getCollection(path);
        _.assign(collections, collection);
      }

      resolve(collections);
    } catch (err) {
      reject(err);
    }
  });
}

function getCollection(path): Promise<any> {
  const collection = {};

  return db.collection(path).get().then(async snaps => {
    // try {
    if (snaps.size === 0) {
      throw new Error(`No ducuments in collection: ${path}`);
    };

    for (const snap of snaps.docs) {
      const doc = { [snap.id]: JSON.stringify(snap.data()) };

      // log if requested
      // args.verbose && console.log(snap.ref.path);

      // Decode Doc
      //decodeDoc(doc[snap.id]);

      // process sub-collections
      if (false) {
        const subCollPaths = await snap.ref.getCollections().then(colls => colls.map(coll => coll.path));
        if (subCollPaths.length) {
          const subCollections = await getCollections(subCollPaths);
          _.assign(doc[snap.id], subCollections);
        }
      }

      // doc to collection
      _.assign(collection, doc);
    }
    // } catch (error) {
    //     console.log(error);
    // }
  }).then(() => {
    const collId = path.split('/').pop();
    const collPath = `${collId}:${collId}`;
    return ({ [collPath]: collection });
  });
}

function bookWriteCSV(book: XLSX.WorkBook, file: string) {
  //XLSX.writeFile(book,file);
  const fileParts = file.split('.');
  const indexSheet = book.Sheets['INDEX'];
  const indexJson = XLSX.utils.sheet_to_json(indexSheet);

  // If only one collection, write single file
  const single = book.SheetNames.length === 2;
  if (single) {
    const sheet = book.Sheets[indexJson[0]['Sheet Name']];
    XLSX.writeFile(book, file, { bookType: 'csv' });
    return;
  }
  // Otherwise write an index file and csv per collection

  // write index file
  const filename = [...fileParts];
  filename.splice(-1, 0, 'INDEX');
  XLSX.writeFile(book, filename.join('.'), { bookType: 'csv', sheet: 'INDEX' });

  // write collection files
  indexJson.forEach(index => {
    const sheetName = index['Sheet Name'];
    const sheet = book.Sheets[sheetName];
    const filename2 = [...fileParts];
    filename2.splice(-1, 0, sheetName);
    XLSX.writeFile(book, filename2.join('.'), { bookType: 'csv', sheet: sheetName });
  });
}

function json2book(json): XLSX.WorkBook {
  const book = XLSX.utils.book_new();
  const collPrefixSliceLength = 10;//(<string>args.collPrefix).length + 1;
  const collectionIndex = [];

  book.Props = {
    ...book.Props,
    Title: 'FireStore Export',
    Author: 'firestore-migrator',
    CreatedDate: new Date()
  }

  const addCollection = (coll, path: string) => {
    const sheetName = shortid.generate();
    const docs = [];

    // Turn key'd document objects into an array of flat documents objects, each with a document id
    _.forEach(coll, (doc, id: string) => {
      // process any sub-collections
      const subCollFields = Object.keys(doc).filter(key => key.startsWith('collection' + ':'));
      subCollFields.forEach(name => {
        addCollection(doc[name], [path, id, name.slice(collPrefixSliceLength)].join('/'));
        delete (doc[name]);
      });

      // flatten objects
      const flatDoc = dot.dot(doc);

      docs.push({ ['doc_id']: id, ...flatDoc });
    });

    // add collection sheet to book
    const sheet = XLSX.utils.json_to_sheet(docs);
    XLSX.utils.book_append_sheet(book, sheet, sheetName);

    // add an index entry
    collectionIndex.push({
      sheetName,
      path,
      depth: path.split('/').length,
      count: docs.length
    });

  };

  // process collections
  _.forEach(json, (coll, key) => {
    addCollection(coll, key.slice(collPrefixSliceLength));
  });

  // index sheet
  const indexSheet = XLSX.utils.aoa_to_sheet([
    ['Sheet Name', 'Collection', 'Depth', 'Documents', 'Link']
  ]);
  //collectionIndex.sort(sortByKeysFn(['depth', 'path']));
  collectionIndex.forEach((coll, index) => {
    const n = index + 2;
    indexSheet['!ref'] = `A1:E${n}`;
    indexSheet[`A${n}`] = { t: 's', v: coll.sheetName };
    indexSheet[`B${n}`] = { t: 's', v: coll.path };
    indexSheet[`C${n}`] = { t: 'n', v: +coll.depth };
    indexSheet[`D${n}`] = { t: 'n', v: +coll.count };
    indexSheet[`E${n}`] = { t: 's', v: 'link', l: { Target: `#${coll.sheetName}!A1` } };
  });
  XLSX.utils.book_append_sheet(book, indexSheet, 'INDEX');


  return book;
}



