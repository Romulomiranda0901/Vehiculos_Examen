const mysql = require('mysql');

const db = mysql.createConnection({
    host: '52.20.16.17',
    user: 'movistarmysql',
    password: 'MovSoft2018',
    database: 'EXAMEN'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

module.exports = db;