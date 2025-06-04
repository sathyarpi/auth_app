const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password : '1234',
    database: 'auth_db'

});

module.exports = pool;