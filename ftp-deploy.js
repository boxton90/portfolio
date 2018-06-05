/* FTP CONFIG CONSTS */

// Directories of files to be updated
const htmlDirectory = 'index.html';
const cssDirectory = 'public/assets/css/main.min.css';
const imagesDirectory = 'public/assets/img/*';

// Directories of files to be ignored
const nodeModulesDirectory = 'node_modules/**'

// FTP sesion details
const user = 'u394396885';
const password = '';
const host = 'files25.hostinger.es';
const port = 21;
const remoteRoot = '/public_html';
const localRoot = __dirname;

let FtpDeploy = require('ftp-deploy');
let ftpDeploy = new FtpDeploy();

const config = {
    user: user,
    password: password,
    host: host,
    port: port,
    localRoot: localRoot,
    remoteRoot: remoteRoot,
    include: [htmlDirectory,cssDirectory,imagesDirectory],
    exclude: [nodeModulesDirectory],
    deleteRoot: true // delete existing files at FTP server before uploading
}

// FTP deployment using promises
ftpDeploy.deploy(config)
    .then(res => console.log('FTP deployment finished successfully'))
    .catch(err => console.log(err));

/* EVENTS */

// Events to track the files getting updated
ftpDeploy.on('uploading', function(data) {
    data.totalFileCount; // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.filename; // partial path with filename being uploaded
});
ftpDeploy.on('uploaded', function(data) {
    console.log(data); // same data as uploading event
});