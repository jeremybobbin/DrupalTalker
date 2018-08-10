module.exports = class Url {
    constructor(url) {
        this.url = url;
        this.parse(url);
    }

    parse(string) {
        let array = string.split('//');
        if(array.length === 2) this.protocal = array.shift() === 'https:';
        array = array[0].split('/');
        this.hostname = array.shift().split('.');
        this.path = array;

    }

    isSecure() {
        return this.protocol;
    }

    getHostname() {
        return this.hostname.join('.');
    }

    getPath() {
        return this.path;
    }

    getUrl() {
        return this.url;
    }
}
