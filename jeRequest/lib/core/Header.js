module.exports = class Header {
    constructor(headers) {
        this.headers = headers || {};
    }

    toJson() {
        return this.headers;
    }

    forEach(callback) {
        let i = 0;
        for(let k in this.headers) {
            callback(k, this.headers[k], i);
            i++;
        }
    }

    map(callback) {
        const arr = [];
        this.forEach((k, v, i) => {
            arr.push(callback(k, v, i));
        });
        return arr;
    }

    getKeys() {
        return this.map(k => k);
    }

    get(k) {
        return this.headers[k];
    }

    set(k, v) {
        this.headers[k] = v;
    }

    append(k, v) {
        if(this.has(k) && this.get(k) !== null && this.get(k) !== undefined) {
            this.headers[k] += ', ' + v;
        } else {
            this.set(k, v);
        }
    }

    merge(headers) {
        for(let k in headers) this.append(k, headers[k]);
        return this;
    }

    has(k) {
        return this.headers.hasOwnProperty(k);
    }

    accept(type = 'json') {
        if(type = 'json') type = 'application/json';
        this.set('Content-Type', type);
    }
}