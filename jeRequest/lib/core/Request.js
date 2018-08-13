const http = require('http');
const https = require('https');

const Protocol = require('./Protocol');
const Header = require('./Header');
const Url = require('./Url');

module.exports = class Request {
    constructor(method, url, header) {
        this.method = method;
        this.url = new Url(url);
        this.header = header;
    }

    callback(response, resolve) {
        const chunks = [];
        response.on('data', chunk => console.log(chunk));
        response.on('end', () => resolve(Buffer.concat(chunks).toString()));
    }

    execute() {
        const method = this.method,
            hostname = this.url.getHostname(),
            path = this.url.getPath(),
            headers = this.header.toJson(),
            options = { method, hostname, path, headers};


        return new Promise((resolve, reject) => {
            // this.protocol.request(options, (res) => this.callback(res, resolve))
            //     .on('error', (e) => reject(e));
            console.log(options);
            Protocol(options, this.url.isSecure(), (res) => this.callback(res, resolve))
                .on('error', (e) => reject(e));;
        });
    }

}