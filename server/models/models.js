var db = require('../../db');
//var bcrypt = require('bcrypt');

module.exports = {
  notes: {
    get: function(userId, callback) {
      var queryString = 'SELECT * FROM notes WHERE userID = ?';
      db.query(queryString, userId, function(err, results) {
        console.log('Getting All Notes For User');
        callback(err, results);
      });
    },
    post: function(params, callback) {
      var queryString = 'INSERT INTO notes(name, userId, data) VALUES (?, ?, ?);';
      db.query(queryString, params, function(err, results) {
        console.log('TRYING TO POST NOTE');
        callback(err, results);
      })
    }
  }
};