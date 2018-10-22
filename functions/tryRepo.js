// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from the main application');
// });

// const reportingApp = express();
// app.use('/reporting', reportingApp);

// const server = app.listen(3000);

// const jsreport = require('jsreport')({
//   extensions: {
//       express: { app: reportingApp, server: server },
//   },
//   appPath: "/reporting"
// });

// jsreport.init().then(() => {
//   console.log('jsreport server started')
// }).catch((e) => {
//   console.error(e);
// });

var fs = require('fs');
var path = require('path');

/** Import the jsreports server module and create a Server instance */
var jsreports = require('./lib/jsreports/jsreports-server.js');
var server = new jsreports.Server();

/**
 * Load the report and data source definitions from
 * JSON files specified in command line arguments.
 */
var report = require(process.argv[2]);
var datasets = require(process.argv[3]);

/**
 * Call server.export() just like you would call jsreports.export().
 * The last argument is a callback function that will be called with
 * a stream containing the PDF for reading.
 */
// server.export({
//    format: 'PDF',
//    report_def: report,
//    datasets: datasets,
//    /**
//     * Must provide a file:// base URL to prepend to the image 
//     * URLs in the report, in order to locate them on the server - 
//     * here, expect images to be in the current directory
//     */
//    imageUrlPrefix: 'file://' + path.resolve(__dirname) + '/'
// }, function(err, pdfStream) {
//   if (err) return console.error(err);
//   /**
//    * At this point we have the PDF available for reading
//    * in pdfStream.  Write it to the path specified at 
//    * the command line
//    */
//   var outPath = path.resolve(process.argv[4]);
//   var outStream = fs.createWriteStream(outPath, 'utf8');
//   pdfStream.on('end', function() {
//     console.log('Wrote PDF to', outPath);
//     server.stop();
//   });
//   pdfStream.pipe(outStream);
// });

const http = require('http');
const jsreport = require('jsreport');

http.createServer((req, res) => {
    jsreport.render("<h1>Hello world</h1>").then((out) => {
        out.stream.pipe(res);
    }).catch((e) => {
        res.end(e.message);
    });

}).listen(1337, '127.0.0.1');