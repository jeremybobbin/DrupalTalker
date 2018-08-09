const Request = require('./Request');

module.exports = class jeRequest {
    constructor(headers) {
        if(typeof this.headers !== 'object') throw 'Headers passed in to jeRequest should be an object.'; 
        this.defaultHeaders = headers;
    }

    appendHeader() {
        
    }

    get(url, headers) {
        return new Request('GET', url, headers);
    }
    post(url, headers) {
        return new Request('POST', url, headers);
    }
    put(url, headers) {
        return new Request('PUT', url, headers);
    }
    delete(url, headers) {
        return new Request('DELETE', url, headers);
    }
}