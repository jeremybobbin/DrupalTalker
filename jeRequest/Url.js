module.exports = class Url {
    constructor(url) {
        this.url = url;
        this.parse(url);
    }

    parse(string) {
        let array = this.string.split('//');
        if(array.length === 2) this.protocal = array.shift() === 'https:';
        array = array[0];
        array.split('/');
        this.hostname = array[0].split('.');
        this.path = array[1].split('/');

    }

    isSecure() {
        return this.protocol;
    }

    getHostname() {
        return this.hostname;
    }

    getPath() {
        return this.path;
    }

    getUrl() {
        return this.url;
    }
}
