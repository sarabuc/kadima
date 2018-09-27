import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { saveAs } from 'file-saver';

export const getFileFromStorage = functions.https.onCall(async (data, context) => {
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
});
