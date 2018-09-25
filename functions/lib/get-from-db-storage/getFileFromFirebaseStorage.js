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
const functions = require("firebase-functions");
exports.getFileFromStorage = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    // const storageRef = admin.storage();
    // // Create a reference to the file we want to download
    // const starsRef = storageRef.bucket('files/IMG_4612.jpg').;
    // // Get the download URL
    // starsRef.getDownloadURL().then(url => {
    //   console.log(url);
    //   const xhr = new XMLHttpRequest();
    //   xhr.responseType = 'blob';
    //   xhr.onload = function (event) {
    //     const blob = xhr.response;
    //     console.log(blob);
    //     saveAs(blob, '123.pdf');
    //   };
    //   xhr.open('GET', url);
    //   xhr.send();
    // }).catch(error => {
    //   console.log(error.code);
    //   switch (error.code) {
    //     case 'storage/object_not_found':
    //       // File doesn't exist
    //       break;
    //     case 'storage/unauthorized':
    //       // User doesn't have permission to access the object
    //       break;
    //     case 'storage/canceled':
    //       // User canceled the upload
    //       break;
    //     case 'storage/unknown':
    //       // Unknown error occurred, inspect the server response
    //       break;
    //   }
    // });
}));
//# sourceMappingURL=getFileFromFirebaseStorage.js.map