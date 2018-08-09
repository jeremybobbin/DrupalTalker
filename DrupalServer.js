const axios = require('axios');

module.exports = class DrupalTalker {
    
    constructor(url) {
        this.url = url;
        this.csrf;
    }

    getHeaders() {
        const headers = { 'Content-Type': 'application/json' };
        if(this.csrf) headers['X-CSRF-Token'] = this.csrf;
        return headers;
    }

    request(path, data) {
        return axios({
            method: 'POST',
            url: this.getUrl(path),
            data,
            headers: this.getHeaders()
        });
    }

    getUrl(path = '') {
        return this.url + path;
    }

    getCsrf() {
        return new Promise(resolve => {
            if(this.token) resolve(this.token);
            else resolve(this.genCsrf());
        });
    }

    genCsrf() {
        return this.request('user/token')
            .then(r => {
                if(r.data && r.data.token) return this.cstf = r.data.token
                else throw 'CSRF Token was not returned from: ' + this.getUrl();
            });
    }
 
    register(name, email, password) {
        console.log(name, email, password);
    }

    logIn(name, password) {
        return this.request('user/login', {name, password});
    }

}