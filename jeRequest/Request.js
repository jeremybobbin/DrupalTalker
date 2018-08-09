const http = require('http');
const https = require('https');

const Url = require('./Url');

module.export = class Request {
    constructor(method, url, headers) {
        this.method = method;
        this.url = new Url(url);
        this.headers = headers;
        this.protocal = this.url.isSecure ? https : http;
        this.execute();
    }

    callback(response, resolve, reject) {
        const chunks = [];
        response.on('data', chunk => chunks.push(chunk));
        response.on('end', () => resolve(Buffer.concat(chunks)));
        response.on('error', (e) => reject(e));
    }

    execute() {
        const options = {
            method: this.method,
            hostname: this.url.getHostname(),
            path: this.url.getPath(),
            headers: this.headers
        };

        return new Promise((resolve, reject) => {
            this.protocol.request(options, (res) => this.callback(res, resolve, reject));
        });
    }

}