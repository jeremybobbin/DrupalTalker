module.exports = class Url {
    constructor(url) {
        this.url = url;
        this.parse(url);
    }

    parse(string) {
        let array = string.split('//');
        if(array.length === 2) this.protocol = Boolean(array.shift() === 'https:');
        array = array[0].split('/');
        this.hostname = array.shift();
        this.path = array;

    }

    isSecure() {
        return this.protocol;
    }

    getHostname() {
        return this.hostname;
    }

    getPath() {
        return '/' + this.path.join('/');
    }

    getUrl() {
        return this.url;
    }
}
