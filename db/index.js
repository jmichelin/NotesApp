var mysql = require('mysql');

// var connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'passlock'
// });  
// LOCAL CONNECTION


var connection = mysql.createConnection({
    host: 'mysqlcluster11.registeredsite.com',
    user: 'passkeeperadmin',
    password: '!Qaz2wsx3edc',
    database: 'passkeeper'
});
connection.connect();

module.exports = connection;
