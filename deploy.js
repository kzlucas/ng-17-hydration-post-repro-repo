require('dotenv').config()

if(!process.env.FTP_USER || !process.env.FTP_PASSWORD || !process.env.FTP_HOST || !process.env.FTP_PORT || !process.env.FTP_REMOTEROOT) {
    console.log('Please set FTP_USER, FTP_PASSWORD, FTP_HOST, FTP_PORT and FTP_REMOTEROOT environment variables')
    process.exit()
}

/*
 * Deploy build folder via FTP
 * Package @https://github.com/simonh1000/ftp-deploy 
 */


const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

ftpDeploy.on("uploading", function (data) {
    console.log(data);
});
ftpDeploy.on("uploaded", function (data) {
    console.log(data); 
});
ftpDeploy.on("log", function (data) {
    console.log(data); 
});
ftpDeploy.on("upload-error", function (data) {
    console.log(data.err);
});

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    localRoot: "./dist/angular-app/",
    remoteRoot: process.env.FTP_REMOTEROOT,
    include: ["*", "**/*", ".*"],
    exclude: [],
    deleteRemote: false,
    forcePasv: true,
    sftp: true,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));