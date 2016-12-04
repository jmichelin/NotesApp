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
    password: /*FIX ME*/ '!Qaz2wsx3edc',
    database: 'passkeeper'
})
connection.connect();

module.exports = connection;



// var knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: ' mysqlcluster11.registeredsite.com',
//     user: 'passkeeperadmin',
//     password: '!Qaz2wsx3edc',
//     database: 'passkeeper'
//   }
// });
// var db = require('bookshelf')(knex);


// db.knex.schema.hasTable('users').then(function(exists) {
//   if(!exists) {
//     db.knex.schema.createTable('users', function(user) {
//       user.increments('id').primary();
//       user.string('username', 255);
//       user.string('password', 255);
//     }).then(function(table) {
//       console.log('Created Table: ', table);
//     });
//   }
// });

// db.knex.schema.hasTable('notes').then(function(exists) {
//   if(!exists) {
//     db.knex.schema.createTable('notes', function(note) {
//       note.increments('id').primary();
//       note.string('name', 255);
//       note.string('isPrivate',10);3
//     }).then(function(table) {
//       console.log('Created Table: ', table);
//     });
//   }
// });

// db.knex.schema.hasTable('snippets', function(exists) {
//   if(!exists) {
//     db.knex.schema.createTable('snippets', function(snippet) {
//       snippet.increments('id').primary();
//       snippet.string('name', 255);
//       snippet.string('data');
//     }).then(function(table) {
//       console.log('Created Table: ', table);
//     });
//   }
// });

// db.knex.schema.hasTable('tags', function(exists) {
//   if(!exists) { 
//     db.knex.schema.createTable('tags', function(tag) {
//       tag.increments('id').primary();
//       tag.string('tagname', 255);
//     }).then(function(table) {
//       console.log('Created Table: ', table);
//     });
//   }
// });


// db.knex.schema.hasTable('tagNotes', function(exists) {
//   if(!exists) {
//     db.knex.schema.createTable('tagNotes', function(tn) {
//       tn.integer('test');
//     }).then(function(table) {
//       console.log('Created Table: ', table);
//     });
//   }
// });

// db.knex.schema.table('notes', function (table) {
//   table.foreign('userId').references('id').inTable('users');
// })
// db.knex.schema.table('snippets', function (table) {
//   table.forgeign('noteId').references('id').inTable('notes');
// })
// db.knex.schema.table('tagNotes', function (table) {
//   table.dropColumn('test');
//   table.forgeign('noteId').references('id').inTable('notes');
//   table.foreign('tagId').references('id').inTable('tags');
// })
// module.exports = db;