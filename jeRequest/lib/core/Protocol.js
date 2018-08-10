const http = require('http'),
    https = require('https');

module.exports = function Protocol(callback, options, isSecure) {
    if(isSecure) {
        options.agent = new https.Agent({ keepAlive: true });
        return https.request(options, (res) => callback(res));
    } else {
        options.agent = new http.Agent({ keepAlive: true });
        return http.request(options, (res) => callback(res));
    }
}