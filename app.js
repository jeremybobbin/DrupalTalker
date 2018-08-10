const jeRequest = require('./jeRequest');

jeRequest.acceptType('json');

jeRequest.get('http://api.twitter.com/1.1/direct_messages/events/list.json')
    .then(r => console.log(r));