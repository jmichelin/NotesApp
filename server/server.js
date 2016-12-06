var db = require('../db/index.js');
var LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var methodOverride = require('method-override');
var partials = require('express-partials');
var parser = require('body-parser');
var morgan = require('morgan');
var router = require('./routes.js');
var app = express();
var models = require('./models/models.js')
module.exports.app = app;

// //For GitHub OAuth
// // var GitHubStrategy = require('passport-github2').Strategy;
// // var gitInfo = require('../db/git-info/index.js');
// // var GITHUB_CLIENT_ID = gitInfo.CLIENT_ID;
// // var GITHUB_CLIENT_SECRET = gitInfo.CLIENT_SECRET;
// app.use(methodOverride());
// app.use(session({ secret: 'notesAppSecret', resave: false, saveUninitialized: false }));
// // Initialize Passport!  Also use passport.session() middleware, to support
// // persistent login sessions (recommended).
// app.use(passport.initialize());
// app.use(passport.session());

app.set('port',process.env.PORT || 5468);
app.use(morgan('dev'));
app.use(parser.json());
app.use(router);
app.use(express.static(path.join(__dirname, '/../client')));

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     models.user.findOne({ username: username }, function (err, user) {
//       console.log('USERNAME:  !!! ', user)
//       if (err) { 
//         return done(err); 
//       }
//       if (!user) { 
//         return done(null, false); 
//       }
//       // if (!user.verifyPassword(password)) { 
//       //   return done(null, false); 
//       // }
//       return done(null, user);
//     });
//   }
// ));

// router.get('/', passport.authenticate('local', { successRedirect: '/api/notes',
//                                    failureRedirect: '/login' })
// // ,function(req, res) {
// //   res.sendFile(path.join(__dirname, '../client/index.html'));
// // }
// );

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/' })
// );




if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Notes-App Listening on ', app.get('port'));
}