const http = require('http'),
    https = require('https');

module.exports = function Protocol(options, isSecure, callback) {
    console.log(callback);
    if(isSecure) {
        console.log('This is a secure URL.');
        options.agent = new https.Agent({ keepAlive: true });
        return https.request(options, (res) => callback(res));
    } else {
        console.log('This is NOT a secure URL.');
        options.agent = new http.Agent({ keepAlive: true });
        return http.request(options, (res) => callback(res));
    }
}