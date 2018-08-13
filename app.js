const DrupalServer = require('./DrupalServer');

const drup = new DrupalServer('https://www.freshpeeps.com/drupal/api/');

drup.init()
    .then(() => {
        drup.logIn('jerGuy', 'Password100')
            .then(r => console.log(r));
    });