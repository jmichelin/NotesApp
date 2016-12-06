var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'mysqlcluster11.registeredsite.com',
    user: 'passkeeperadmin',
    password: /*FIX ME*/ '',
    database: 'passkeeper'
})
connection.connect();

module.exports = connection;