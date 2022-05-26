let mysql = require('mysql');

const ligarbanco = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '1999',
    database: 'blog',
});

module.exports =  ligarbanco;
