const Header = require('./Header');
const Request = require('./Request');
console.log(typeof Request);

module.exports = class JeRequest {
    constructor(headers) {
        this.defaultHeaders = new Header(headers);
    }

    acceptType(type) {
        this.defaultHeaders.accept(type);
    }

    appendHeader(k, v) {
        this.defaultHeaders.set(k, v);
    }

    get(url, headers) {
        return this.instantiate('GET', url, headers);
    }

    post(url, headers) {
        return this.instantiate('POST', url, headers);
    }

    put(url, headers) {
        return this.instantiate('PUT', url, headers);
    }

    delete(url, headers) {
        return this.instantiate('DELETE', url, headers);
    }

    instantiate(method, url, headers) {
        return new Request(method, url, this.defaultHeaders.merge(headers))
            .execute();
    }
}