"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const fs = require("fs-extra");
const _ = require("lodash");
const XLSX = require("xlsx");
const shortid = require("shortid");
const dot = require("dot-object");
// import { sortByKeysFn, decodeDoc } from '../shared';
const db = admin.firestore();
let args;
exports.execute = (options) => __awaiter(this, void 0, void 0, function* () {
    args = options;
    const json = {};
    const file = 'data.csv';
    const collectionPaths = 'patient'; //await db.getCollections().then(colls => colls.map(coll => coll.path));
    console.log('Getting selected collections...');
    getCollections(collectionPaths)
        .then(collections => {
        if (file.endsWith('.xlsx')) {
            console.log('Writing to Excel:', file);
            const book = json2book(collections);
            XLSX.writeFile(book, file);
        }
        else if (file.endsWith('.csv')) {
            console.log('Writing to CSV:', file);
            const book = json2book(collections);
            bookWriteCSV(book, file);
        }
        else {
            console.log('Writing to JSON:', file);
            return fs.writeJson(file, collections);
        }
    })
        .then(() => {
        console.log('Download was a success!');
    })
        .catch(err => {
        console.log('Failure: ', err);
    });
});
function getCollections(path) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const collections = {};
        try {
            const patients = yield db.collection(path).get();
            for (const doc of patients.docs) {
                collections[path][doc.id] = doc.data();
            }
            resolve(collections);
        }
        catch (err) {
            reject(err);
        }
    }));
}
// function getCollection(path): Promise<any> {
//     let collection = {};
//     return db.collection(path).get().then( async snaps => {
//         // try {
//             if (snaps.size === 0) {
//                 throw `No ducuments in collection: ${path}`;
//             };
//             for (let snap of snaps.docs) {
//                 let doc = { [snap.id]: snap.data() };
//                 // log if requested
//                 args.verbose && console.log(snap.ref.path);
//                 // Decode Doc
//                 decodeDoc(doc[snap.id]);
//                 // process sub-collections
//                 if (args.subcolls) {
//                     const subCollPaths = await snap.ref.getCollections().then(colls => colls.map(coll => coll.path));
//                     if (subCollPaths.length) {
//                         const subCollections = await getCollections(subCollPaths);
//                         _.assign(doc[snap.id], subCollections);
//                     }
//                 }
//                 // doc to collection
//                 _.assign(collection, doc);
//             }
//         // } catch (error) {
//         //     console.log(error);
//         // }
//     }).then(() =>{
//         const collId = path.split('/').pop();
//         const collPath = `${args.collPrefix}:${collId}`;
//         return ({[collPath]: collection });
//     });
// }
function bookWriteCSV(book, file) {
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
function json2book(json) {
    const book = XLSX.utils.book_new();
    const collPrefixSliceLength = args.collPrefix.length + 1;
    const collectionIndex = [];
    book.Props = Object.assign({}, book.Props, { Title: 'FireStore Export', Author: 'firestore-kadima', CreatedDate: new Date() });
    const addCollection = (coll, path) => {
        const sheetName = shortid.generate();
        const docs = [];
        // Turn key'd document objects into an array of flat documents objects, each with a document id
        _.forEach(coll, (doc, id) => {
            // process any sub-collections
            const subCollFields = Object.keys(doc).filter(key => key.startsWith(args.collPrefix + ':'));
            subCollFields.forEach(name => {
                addCollection(doc[name], [path, id, name.slice(collPrefixSliceLength)].join('/'));
                delete (doc[name]);
            });
            // flatten objects
            const flatDoc = dot.dot(doc);
            docs.push(Object.assign({ [args.idField]: id }, flatDoc));
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
    collectionIndex.sort(sortByKeysFn(['depth', 'path']));
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
function sortByKeysFn(keys) {
    const sortTuples = [];
    const dir = 'ASC';
    if (typeof keys === 'string') {
        sortTuples.push({ [keys]: dir });
    }
    else {
        _.forEach(keys, key => sortTuples.push(typeof key === 'string' ? { [key]: dir } : key));
    }
    return (a, b) => {
        let sort = 0;
        for (const tuple of sortTuples) {
            if (sort !== 0)
                break;
            for (const key in tuple) {
                if (tuple[key] === 'ASC') {
                    sort = a[key] > b[key] ? 1
                        : a[key] < b[key] ? -1
                            : 0;
                }
                else {
                    sort = a[key] > b[key] ? -1
                        : a[key] < b[key] ? 1
                            : 0;
                }
            }
        }
        return sort;
    };
}
exports.sortByKeysFn = sortByKeysFn;
//# sourceMappingURL=index.js.map