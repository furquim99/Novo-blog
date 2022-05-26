const configExpress = require('./config/server');
const ligarbanco = require('./config/dbServer');
const Novosposts = require('./config/Novosposts');

ligarbanco.connect(error => {
    if (error) {
        throw error;
    };

    Novosposts.init(ligarbanco);

    app = configExpress();

});
