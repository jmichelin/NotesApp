var router = require('express').Router();
var controllers = require('./controllers/controllers.js');

router.get('/', function(req, res) {
  res.send('Welcome to Index')
});

router.get('/api/notes', controllers.notes.get);

module.exports = router;